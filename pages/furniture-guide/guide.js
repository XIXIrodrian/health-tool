// pages/furniture-guide/guide.js
const { furnitureData } = require('./data.js');

Page({
  data: {
    currentCategory: 'all',
    searchKeyword: '',
    furnitureData: furnitureData,
    filteredFurniture: []
  },

  onLoad() {
    this.setData({
      filteredFurniture: this.data.furnitureData
    });
  },

  /**
   * 切换分类
   */
  switchCategory(e) {
    const category = e.currentTarget.dataset.category;
    this.setData({
      currentCategory: category
    });
    this.filterFurniture();
  },

  /**
   * 搜索输入
   */
  onSearchInput(e) {
    this.setData({
      searchKeyword: e.detail.value
    });
    this.filterFurniture();
  },

  /**
   * 过滤家具列表
   */
  filterFurniture() {
    const { currentCategory, searchKeyword, furnitureData } = this.data;
    let filtered = furnitureData;

    // 按分类过滤
    if (currentCategory !== 'all') {
      filtered = filtered.filter(item => item.category === currentCategory);
    }

    // 按关键词搜索
    if (searchKeyword) {
      filtered = filtered.filter(item => {
        return item.name.includes(searchKeyword) ||
               item.description.includes(searchKeyword) ||
               item.materials.some(m => m.name.includes(searchKeyword));
      });
    }

    this.setData({
      filteredFurniture: filtered
    });
  },

  /**
   * 查看详情
   */
  viewDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/furniture-guide/detail?id=${id}`
    });
  }
});