// pages/furniture-guide/detail.js
const { furnitureData } = require('./data.js');

Page({
  data: {
    furniture: {},
    goodMaterials: [],
    badMaterials: []
  },

  onLoad(options) {
    const id = parseInt(options.id);
    const furniture = furnitureData.find(item => item.id === id);

    if (furniture) {
      const goodMaterials = furniture.materials.filter(m => m.type === 'good');
      const badMaterials = furniture.materials.filter(m => m.type === 'bad');

      this.setData({
        furniture,
        goodMaterials,
        badMaterials
      });
    } else {
      wx.showToast({
        title: '未找到家具信息',
        icon: 'none'
      });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
    }
  }
});