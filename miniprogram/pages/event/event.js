// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shu:0,
    can:0,
    input:0
  },
  tiaoFlex(){
    wx.navigateTo({
      url: '/pages/flex/flex',
    })
  },
  tiaoMei(){
    wx.navigateTo({
      url: '/pages/media/media',
    })
  },
  tiaoV(){
    wx.navigateTo({
      url: '/pages/video/video',
    })
  },
  tiaoTu(){
    wx.navigateTo({
      url: '/pages/map/map',
    })
  },
  tiaoHua(){
    wx.navigateTo({
      url: '/pages/canvas/canvas',
    })
  },
  tiaoKai(){
    wx.navigateTo({
      url: '/pages/open/open',
    })
  },
  dijian(){
    this.setData({
      shu:this.data.shu-1
    })
  },
  chuancan:function(e){
    console.log(e);
    console.log("number:",this.data.number);
    this.setData({
      can:e.currentTarget.dataset.number
    })    
  },
  getInput:function(e){
    console.log(e.detail);
    this.setData({
      shuru:e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})