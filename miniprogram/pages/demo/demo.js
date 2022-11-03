// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openId:"",
    "message": "hello MINA",
    "id": 1,
    "border": "1px solid #333",
    "condition":false,
    showText:false,
    a:1,
    b:2,
    c:3,
    d:4,
    length:5,
    name:'小程序',
    object:{
      key:25
    },
    array : ['arr1','arr2'],
    zero:0,
    value1:'mamaba',
    value2:30,
    
  },
getOpenId:function(){
  var that = this;
  wx.cloud.callFunction({
    name:'demo',
    data:{
      token:123
    },
    success:function(res){
      that.setData({
        openId:res.result.openid
      })
    }
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