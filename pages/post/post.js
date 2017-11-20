var DBPost=require('../../db/DBPost.js').DBPost;
Page({
  data: {

  },
  onLoad: function () {
    var dbPost =new DBPost();
    this.setData({
      postList: dbPost.getAllPostData()
    })
  },
  onShow: function () {

  },
  onReady: function () {

  }


})