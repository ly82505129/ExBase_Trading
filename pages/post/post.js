// var DBPost=require('../../db/DBPost.js').DBPost; prototype方式操作数据库缓存
import { DBPost } from '../../db/DBPost.js';

Page({
  data: {

  },
  onLoad: function () {
    var dbPost = new DBPost();
    this.setData({
      postList: dbPost.getAllPostData()
    })
  },
  onShow: function () {

  },
  onReady: function () {

  },
  onTapToDetail(event) {
    var postId=event.currentTarget.dataset.postId;
    wx.navigateTo({
      url: 'post-detail/post-detail?id='+ postId,
    })
    
  }

})
