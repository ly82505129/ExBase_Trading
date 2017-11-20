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
};
export { DBPost }