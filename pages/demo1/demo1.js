// pages/demo1/demo1.js
const util=require("../../utils/util");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    msg:"我还没有被点击",
    count:0,
    color:"#000",
    btnText:"开始下载",
    percent:0,
    isStart:false
  },
  start:function(){
    this.data.isStart=true;
      this.data.percent+=10;
    this.setData({percent:this.data.percent,btnText:"继续下载"});
  },
  end:function(){
    if (this.data.percent==100) {
      this.setData({btnText:"重新下载"});
      this.data.percent=0;
    }
  },
  tapMe:function () {
    this.data.count++;
    this.data.msg="我被点击了"+this.data.count+"次";
    // console.log(this.data.count);
    // console.log(this.data.msg);
    this.setData({
      msg:this.data.msg,
      color:util.getColor()
    })
  },
  tapv1:function () {
    console.log("你点击v1")
  },
  tapv2:function () {
    console.log("你点击v2")
  },
  tapv3:function () {
    console.log("你点击v3")
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