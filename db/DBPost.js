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
class DBPost{
  
}