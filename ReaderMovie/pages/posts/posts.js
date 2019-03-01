Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var posts_content=[
      {
        date: "Sep 18 2016",
        title: "正是虾肥蟹壮时",
        post_img: "/images/post/crab.png",
        author_img: "/images/post/bl.png",
        content: "在这瓜果飘香、稻黍起舞的召唤声中,又是一度蟹肥虾壮时。螃蟹也成了人们酒席上必不可少的菜肴,尤其是正值金秋时节,螃蟹更是座上宾",
        collect_num: "112",
        view_num: "96",
      },
      {
        date: "Sep 18 2016",
        title: "正是虾肥蟹壮时",
        post_img: "/images/post/crab.png",
        author_img: "/images/post/bl.png",
        content: "在这瓜果飘香、稻黍起舞的召唤声中,又是一度蟹肥虾壮时。螃蟹也成了人们酒席上必不可少的菜肴,尤其是正值金秋时节,螃蟹更是座上宾",
        collect_num: "112",
        view_num: "96",
      }
    ]
  //  将对应的数据注入到data中去
    this.setData({
      posts_key: posts_content
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage");
  }
})