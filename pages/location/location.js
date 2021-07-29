// pages/location/location.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myAddress: "",
    "name":"",
    "address":"",
  },
  getMyLocation1: function () {
    var that = this;
    wx.getLocation({
      type: "wgs84",
      success: function (res) {
        console.log(res);
        wx.request({
          url: "https://apis.map.qq.com/ws/geocoder/v1/?location=" + res.latitude + "," + res.longitude + "&key=BRRBZ-EENKU-ALRVT-4JFQG-TYYA3-ZZBSU&get_poi=1",
          success: function (response) {
            console.log(response);
            that.setData({
              myAddress: response.data.result.address
            })
          }
        })
      }
    })
  },

  getMyLocation2: function () {
    wx.getLocation({
      type: "gcj02",
      success: function (res) {
        console.log(res);
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
        })
      }
    })
  },
  chooseMap:function(){
    var that=this;
    wx.chooseLocation({
      success:function(res){
        console.log(res)
        that.setData({
          name:res.name,
          address:res.address,
        })
      }
    })
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