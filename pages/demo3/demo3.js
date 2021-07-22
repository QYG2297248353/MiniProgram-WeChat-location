// pages/demo3/demo3.js
const arr2=[[],[],[]];
for (let i = 2019; i < 2024; i++){
  arr2[0].push(i+" -");
}
for (let i = 1; i < 13; i++){
  var d=i<10?"0"+i:i;
  arr2[1].push(d+" -");
}
for (let i = 1; i < 30; i++){
  var d=i<10?"0"+i:i;
  arr2[2].push(d);
}

function formatDate(date) {
  let d=new Date(date);
  let YY=d.getFullYear();
  let MM=d.getMonth()+1;
  let DD=d.getDate();
  return YY+"-"+MM+"-"+DD;
}
let current=new Date().getTime();
let nowDate=formatDate(current);
let endDate=formatDate(current+30*24*60*60*1000);

function formatTime(tt) {
  let t=new Date(tt);
  let hh=t.getHours();
  let mm=t.getMinutes();
  hh=hh<10?"0"+hh:hh;
  mm=mm<10?"0"+mm:mm;
  return hh+":"+mm;
}
let current1=new Date().getTime();
let nowTime=formatTime(current1);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:["特等座","商务座","一等座","二等座","站票座"],
    arrKey:0,
    arr2:arr2,
    arrKey2:[1,2,0],
    pickerDate:nowDate,
    startDate:nowDate,
    endDate:endDate,
    nowTime:nowTime,
  },


  arrChanger:function(e){
    console.log(e);
    console.log(this.data.arrKey);
    this.setData({
      arrKey:e.detail.value
    })
  },
  arrChanger2:function(e){
    console.log(e.detail.value);
    this.setData({
      arrKey2:e.detail.value
    })
  },
  dateChange:function (e) {
    this.setData({
      pickerDate:e.detail.value
    })
  },
  timeChange:function (e) {
    this.setData({
      nowTime:e.detail.value
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