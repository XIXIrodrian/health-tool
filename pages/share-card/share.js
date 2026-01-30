// pages/share-card/share.js
Page({
  data: {
    // 卡片数据
  },

  onLoad(options) {
    // 页面加载
  },

  /**
   * 保存卡片到相册
   */
  saveCard() {
    wx.showLoading({
      title: '生成中...'
    });

    // TODO: 实现canvas绘制卡片并保存
    setTimeout(() => {
      wx.hideLoading();
      wx.showModal({
        title: '功能开发中',
        content: '保存到相册功能将在后续版本实现',
        showCancel: false
      });
    }, 1000);
  },

  /**
   * 分享卡片给好友
   */
  shareCard() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });

    wx.showToast({
      title: '请点击右上角分享',
      icon: 'none'
    });
  },

  /**
   * 分享到微信
   */
  onShareAppMessage() {
    return {
      title: '我的坐姿健康报告',
      path: '/pages/share-card/share',
      imageUrl: '/images/share-card.png'
    };
  },

  /**
   * 分享到朋友圈
   */
  onShareTimeline() {
    return {
      title: '智能坐姿助手 - 我的健康报告'
    };
  }
});