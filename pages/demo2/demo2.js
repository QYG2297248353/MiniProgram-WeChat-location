// pages/demo2/demo2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[{
      imgPath:"1.png",
      href:"../logs/logs"
    },{
      imgPath:"2.png",
      href:"../demo1/demo1"
    },{
      imgPath:"3.png",
      href:"../index/index"
    },{
      imgPath:"4.png",
      href:"../logs/logs"
    },{
      imgPath:"5.png",
      href:"../logs/logs"
    }],
    current:0
  },
  changeSwiper:function(item) {
    console.log(item);
    this.setData({current:item.detail.current});
  },
  scrollLower:function() {
    console.log("到达底部");
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})