// pages/posture-analyze/analyze.js
Page({
  data: {
    hasResult: false,
    imagePath: '',
    scanning: false,
    progress: 0
  },

  onLoad(options) {
    // 页面加载
  },

  /**
   * 拍照分析
   */
  takePhoto() {
    const that = this;
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['camera'],
      success(res) {
        const tempFilePath = res.tempFiles[0].tempFilePath;
        that.setData({
          imagePath: tempFilePath
        });
        that.analyzePosture(tempFilePath);
      },
      fail(err) {
        console.error('拍照失败:', err);
        wx.showToast({
          title: '拍照失败',
          icon: 'none'
        });
      }
    });
  },

  /**
   * 从相册选择
   */
  chooseImage() {
    const that = this;
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album'],
      success(res) {
        const tempFilePath = res.tempFiles[0].tempFilePath;
        that.setData({
          imagePath: tempFilePath
        });
        that.analyzePosture(tempFilePath);
      },
      fail(err) {
        console.error('选择图片失败:', err);
        wx.showToast({
          title: '选择图片失败',
          icon: 'none'
        });
      }
    });
  },

  /**
   * 分析坐姿（待实现AI接口）
   */
  analyzePosture(imagePath) {
    // 显示扫描动画
    this.setData({
      scanning: true,
      progress: 0
    });

    // 模拟进度条动画
    this.progressTimer = setInterval(() => {
      let currentProgress = this.data.progress;
      if (currentProgress < 95) {
        // 随机增加进度，让动画更自然
        const increment = Math.floor(Math.random() * 10) + 5;
        currentProgress = Math.min(currentProgress + increment, 95);
        this.setData({
          progress: currentProgress
        });
      }
    }, 200);

    // TODO: 调用AI分析接口
    setTimeout(() => {
      // 清除进度定时器
      if (this.progressTimer) {
        clearInterval(this.progressTimer);
      }
      // 完成进度
      this.setData({
        progress: 100
      });
      // 短暂延迟后隐藏扫描动画
      setTimeout(() => {
        this.setData({
          scanning: false,
          hasResult: true
        });
        wx.showToast({
          title: '分析完成',
          icon: 'success'
        });
      }, 500);
    }, 3000);
  }
});