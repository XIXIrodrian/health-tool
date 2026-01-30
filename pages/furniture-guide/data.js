// pages/furniture-guide/data.js
// 家具材质数据

const furnitureData = [
  {
    id: 1,
    name: '办公椅',
    category: 'chair',
    categoryName: '椅子',
    description: '日常办公学习必备',
    image: '/images/furniture/office-chair.png',
    goodMaterials: 3,
    badMaterials: 2,
    materials: [
      {
        name: '网布面料',
        type: 'good',
        performance: '透气性好，不易闷热',
        advantages: ['优异的透气性', '易于清洁', '价格适中', '适合长时间久坐'],
        disadvantages: ['耐用性相对较差', '容易变形'],
        safetyRisks: ['劣质网布可能含有甲醛', '部分产品透气孔过大易夹手']
      },
      {
        name: '记忆棉',
        type: 'good',
        performance: '贴合身体曲线，缓解压力',
        advantages: ['舒适度高', '良好的支撑性', '缓解腰椎压力'],
        disadvantages: ['价格较高', '夏季可能闷热', '使用寿命3-5年'],
        safetyRisks: ['劣质记忆棉可能含有甲苯等有害物质', '密度不足易塌陷']
      },
      {
        name: '真皮',
        type: 'good',
        performance: '高档耐用，透气舒适',
        advantages: ['耐用性强', '透气性好', '质感高档', '易清洁'],
        disadvantages: ['价格昂贵', '需��定期保养'],
        safetyRisks: ['劣质皮革可能使用重金属鞣剂', '人造革含有塑化剂风险']
      },
      {
        name: 'PU皮',
        type: 'bad',
        performance: '仿皮材质，不透气',
        advantages: ['价格便宜', '防水性好'],
        disadvantages: ['不透气易闷热', '易老化开裂', '夏季粘腻'],
        safetyRisks: ['含有塑化剂(DEHP等)', '高温下释放有害气体', '长期接触可能影响内分泌']
      },
      {
        name: '劣质海绵',
        type: 'bad',
        performance: '填充材料，易塌陷',
        advantages: ['成本低'],
        disadvantages: ['密度低易塌陷', '支撑力差', '使用寿命短'],
        safetyRisks: ['含有甲醛和TDI', '燃烧会产生剧毒氰化物', '可能引发呼吸道疾病']
      }
    ]
  },
  {
    id: 2,
    name: '实木餐桌',
    category: 'table',
    categoryName: '桌子',
    description: '环保健康的用餐选择',
    image: '/images/furniture/dining-table.png',
    goodMaterials: 3,
    badMaterials: 2,
    materials: [
      {
        name: '橡木',
        type: 'good',
        performance: '坚固耐用，纹理美观',
        advantages: ['硬度高耐磨', '稳定性好不易变形', '天然木香', '环保健康'],
        disadvantages: ['价格较高', '重量大', '需要定期保养'],
        safetyRisks: ['劣质油漆可能含铅', '部分产品甲醛超标']
      },
      {
        name: '榉木',
        type: 'good',
        performance: '材质坚硬，承重力强',
        advantages: ['质地均匀', '抗冲击力强', '价格适中'],
        disadvantages: ['易开裂', '不防水'],
        safetyRisks: ['表面涂层可能含有害物质']
      },
      {
        name: '竹材',
        type: 'good',
        performance: '天然环保，清新雅致',
        advantages: ['天然抗菌', '生长周期短更环保', '质地轻盈', '价格实惠'],
        disadvantages: ['易受潮', '硬度略低'],
        safetyRisks: ['防腐处理可能使用化学品']
      },
      {
        name: '密度板',
        type: 'bad',
        performance: '人造板材，成本低',
        advantages: ['价格低廉', '表面平整'],
        disadvantages: ['不防水易膨胀', '承重力差', '使用寿命短'],
        safetyRisks: ['甲醛含量高', '长期释放有害气体', '可能导致呼吸系统疾病', 'E1级以下产品禁止室内使用']
      },
      {
        name: '刨花板',
        type: 'bad',
        performance: '碎木压制，质量差',
        advantages: ['成本极低'],
        disadvantages: ['结构松散', '防潮性差', '螺钉固定力弱', '易损坏'],
        safetyRisks: ['甲醛释放量大', '含有大量脲醛树脂', '潮湿环境下加速有害物质释放']
      }
    ]
  },
  {
    id: 3,
    name: '床垫',
    category: 'bed',
    categoryName: '床',
    description: '睡眠质量的关键',
    image: '/images/furniture/mattress.png',
    goodMaterials: 3,
    badMaterials: 2,
    materials: [
      {
        name: '天然乳胶',
        type: 'good',
        performance: '弹性好，支撑性强',
        advantages: ['天然抗菌防螨', '透气性优秀', '贴合身体曲线', '静音无干扰', '环保健康'],
        disadvantages: ['价格昂贵', '易氧化', '对乳胶过敏者不适用'],
        safetyRisks: ['合成乳胶含有化学添加剂', '部分产品乳胶含量虚标']
      },
      {
        name: '独立弹簧',
        type: 'good',
        performance: '抗干扰，支撑均匀',
        advantages: ['独立支撑不互相干扰', '透气性好', '使用寿命长', '适合不同体重'],
        disadvantages: ['价格较高', '需要定期翻转'],
        safetyRisks: ['劣质弹簧易生锈', '弹簧断裂可能划伤']
      },
      {
        name: '山棕纤维',
        type: 'good',
        performance: '天然环保，硬度适中',
        advantages: ['纯天然材料', '透气防潮', '偏硬适合脊椎保护'],
        disadvantages: ['舒适度一般', '价格较高'],
        safetyRisks: ['劣质产品使用胶水粘合含甲醛']
      },
      {
        name: '海绵垫',
        type: 'bad',
        performance: '普通填充材料',
        advantages: ['价格便宜', '轻便'],
        disadvantages: ['易塌陷', '不透气', '支撑力差', '使用寿命短'],
        safetyRisks: ['含有TDI和甲醛', '燃烧产生剧毒', '长期使用影响脊椎健康', '可能引发皮肤过敏']
      },
      {
        name: '劣质棕垫',
        type: 'bad',
        performance: '低价劣质产品',
        advantages: ['价格低'],
        disadvantages: ['使用胶水粘合', '易生虫', '易发霉'],
        safetyRisks: ['甲醛严重超标', '胶水含苯系物', '易滋生螨虫和细菌', '可能引发呼吸道疾病和皮肤病']
      }
    ]
  },
  {
    id: 4,
    name: '布艺沙发',
    category: 'sofa',
    categoryName: '沙发',
    description: '客厅舒适体验核心',
    image: '/images/furniture/sofa.png',
    goodMaterials: 3,
    badMaterials: 2,
    materials: [
      {
        name: '亚麻布',
        type: 'good',
        performance: '天然透气，触感舒适',
        advantages: ['天然环保', '透气性极佳', '吸湿快干', '抗菌抑菌', '冬暖夏凉'],
        disadvantages: ['易皱', '价格较高', '不易清洗'],
        safetyRisks: ['染色剂可能含有害物质', '建议选择OEKO-TEX认证产品']
      },
      {
        name: '棉麻混纺',
        type: 'good',
        performance: '综合性能好',
        advantages: ['舒适度高', '透气性好', '价格适中', '易打理'],
        disadvantages: ['易褪色', '易起球'],
        safetyRisks: ['染色不当可能含有偶氮染料', '选择环保染料产品']
      },
      {
        name: '科技布',
        type: 'good',
        performance: '高科技面料，防污耐用',
        advantages: ['防水防污', '易清洁', '耐磨耐用', '不易褪色'],
        disadvantages: ['透气性一般', '价格较高'],
        safetyRisks: ['部分产品涂层含有害化学物', '选择通过环保认证产品']
      },
      {
        name: '劣质化纤',
        type: 'bad',
        performance: '低价合成材料',
        advantages: ['价格低', '不易皱'],
        disadvantages: ['不透气', '易起静电', '不耐用', '手感差'],
        safetyRisks: ['含有甲醛和芳香胺', '易燃不安全', '可能引起皮肤过敏', '静电吸附灰尘加重呼吸道负担']
      },
      {
        name: 'PVC人造革',
        type: 'bad',
        performance: '仿皮廉价材料',
        advantages: ['价格极低', '防水'],
        disadvantages: ['完全不透气', '易老化开裂', '有刺鼻气味'],
        safetyRisks: ['含有大量塑化剂', '高温释放有毒气体', '长期接触影响生殖系统', '燃烧产生氯化氢剧毒']
      }
    ]
  }
];

module.exports = {
  furnitureData: furnitureData
};