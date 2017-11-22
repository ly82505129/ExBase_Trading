/* prototype构建数据操作类
var DBPost=function(){
  this.storageKeyName='postList';//所有的文章本地缓存存储键值
}

DBPost.prototype={
  getAllPostData:function(){
    var res = wx.getStorageSync(this.storageKeyName);
    if(!res){
      res=require('../data/data.js').postList;
      this.execSetStorageSync(res);
    }
    return res;
  },
  execSetStorageSync:function(data){
    wx.setStorageSync(this.storageKeyName, data);
  },
};

module.exports={
  DBPost: DBPost
};
*/

//用ES6构建数据操作类
class DBPost {
  constructor(postId) {
    this.storageKeyName = 'postList';
    this.postId = postId;
  }

  //获取指定id号的文章数据
  getPostItemByid() {
    var postsData = this.getAllPostData();
    var len = postsData.length;
    for (var i = 0; i < len; i++) {
      if (postsData[i].postId == this.postId) {
        return {
          //当前文章缓存数据库数组中的序号
          index: i,
          data: postsData[i]
        }
      }
    }
  }
  getAllPostData() {
    var res = wx.getStorageSync(this.storageKeyName);
    if (!res) {
      res = require('../data/data.js').postList;
      this.execSetStorageSync(res);
    }
    return res;
  }
  execSetStorageSync(data) {
    wx.setStorageSync(this.storageKeyName, data);
  }
  //收藏功能调用方法
  collect() {
    return this.updatePostData('collect');
  }

  //点赞或者取消点赞
  up() {
    var data = this.updatePostData('up');
    return data;
  }
  updatePostData(category) {
    var itemData = this.getPostItemByid(),
      postData = itemData.data,
      allPostData = this.getAllPostData();

    switch (category) {
      case 'collect':
        if (!postData.collectionStatus) {
          postData.collectionNum ++;
          postData.collectionStatus = true;

        }
        else {
          postData.collectionNum--;
          postData.collectionStatus = false;
        }
        break;

      case 'up':
        if (!postData.upStatus) {
          postData.upNum++;
          postData.upStatus = true;

        }
        else {
          postData.upNum--;
          postData.upStatus = false;
        }
        break;

      default:
        break;
    }
    allPostData[itemData.index]=postData;
    this.execSetStorageSync(allPostData);
    return postData;

  }


};
export {DBPost}