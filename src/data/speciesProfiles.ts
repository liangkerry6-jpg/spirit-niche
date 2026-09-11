import { SpeciesKey, SpeciesProfile } from '@/types';

/** 标本编号顺序（用于海报 NO.00X 编号，与 SPECIES_PROFILES 键保持一致）。 */
export const SPECIES_ORDER: SpeciesKey[] = [
  'capybara',
  'hedgehog',
  'octopus',
  'badger',
  'owl',
  'chameleon',
];

export const SPECIES_PROFILES: Record<SpeciesKey, SpeciesProfile> = {
  capybara: {
    key: 'capybara',
    chineseName: '水豚体',
    englishName: 'Capybara',
    tagline: '省电模式 × 钝感绝缘 × 顺应躺平',
    defenseMechanism: '习得性佛系 / 情感隔离型自愈 (Emotional Isolation)',
    goldenQuote: '生活以痛吻我，我直接就地躺平并问它累不累。',
    symptoms: [
      '微信常年免打扰，朋友圈三年可见且从不发动态。',
      '情绪稳定得像一尊假人，纯粹因为 CPU 懒得为这点破事通电。',
      '危机逻辑：只要砸不到我我就继续吃草；真砸到了，反正大家一起完蛋。',
    ],
    factoryWarning:
      '⚠️ 严禁试图对其进行“狼性激励”或画大饼。任何鸡血口号输入其体内，都会被自动转译为一阵困意，随后陷入深度睡眠。',
    bestPartner: {
      key: 'owl',
      name: '猫头鹰体',
      reason: '你负责把分析做到滴水不漏，我负责静静听着说“行”，绝不给你添乱。',
    },
    worstEnemy: {
      key: 'badger',
      name: '蜜獾体',
      reason: '他每天都在疯狂创飞世界，而我只想世界离我远点，其存在让我生理性耗电。',
    },
    radarMetrics: {
      batteryRemain: 15,
      overloadIndex: 12,
      rebellionLevel: 45,
    },
    themeColor: '#10B981', // 荧光翡翠绿
  },

  hedgehog: {
    key: 'hedgehog',
    chineseName: '刺猬体',
    englishName: 'Hedgehog',
    tagline: '省电模式 × 高敏警戒 × 物理隔离',
    defenseMechanism: '回避型依恋 / 边界感过激防御 (Avoidant Boundary)',
    goldenQuote: '我很缺爱，但只要你敢过来，我就敢把你扎穿。',
    symptoms: [
      '降噪耳机是本体，即使不放歌也必须挂在耳朵上充当“请勿搭讪”结界。',
      '线上秒回热情礼貌，线下聚会半小时就开始筹划如何体面蒸发。',
      '别人换个标点符号都能脑补一出大戏，表面波澜不惊，内心反锁并焊死。',
    ],
    factoryWarning:
      '⚠️ 严禁无预约突然造访或发毫无上下文的“在吗”。这会瞬间触发二级战备状态，导致心率飙升并持续反刍 3 小时。',
    bestPartner: {
      key: 'capybara',
      name: '水豚体',
      reason: '只有面对不争不抢毫无压迫感的水豚，刺猬才会小心翼翼收起刺晒会儿太阳。',
    },
    worstEnemy: {
      key: 'chameleon',
      name: '变色龙体',
      reason: '你越是主动迎合自来熟，刺猬越觉得你另有所图，内心拉响八级警报。',
    },
    radarMetrics: {
      batteryRemain: 20,
      overloadIndex: 92,
      rebellionLevel: 65,
    },
    themeColor: '#6366F1', // 赛博靛蓝
  },

  octopus: {
    key: 'octopus',
    chineseName: '章鱼体',
    englishName: 'Octopus',
    tagline: '超频模式 × 高敏警戒 × 结构操纵',
    defenseMechanism: '主动型焦虑代偿 / 全能感防御 (Omnipotence Defense)',
    goldenQuote: '八条腿都在同时赶工，大脑还在抽空复盘昨晚说错的一句话。',
    symptoms: [
      '浏览器常年开着 40 个未关闭的标签页，每一个都标记着“等会儿看”。',
      '极度怀疑别人的交付能力，边抱怨为什么都是我做，边把权限死抓在手。',
      '靠不断解决危机压制内心的不确定性恐慌，闲下来半天就会产生强烈负罪感。',
    ],
    factoryWarning:
      '⚠️ 严禁回复“好的吧/随便你/你看着办”等模糊指令。章鱼会因信息黑洞疯狂喷墨，并自动衍生出 18 种最坏结局的推演。',
    bestPartner: {
      key: 'chameleon',
      name: '变色龙体',
      reason: '变色龙能极速适应章鱼的高频变动，是绝佳替身与减压阀。',
    },
    worstEnemy: {
      key: 'capybara',
      name: '水豚体',
      reason: '章鱼急得像热锅上的蚂蚁，水豚还在慢条斯理嚼苹果，章鱼当场血管爆裂。',
    },
    radarMetrics: {
      batteryRemain: 88,
      overloadIndex: 95,
      rebellionLevel: 35,
    },
    themeColor: '#06B6D4', // 电子青蓝
  },

  badger: {
    key: 'badger',
    chineseName: '蜜獾体',
    englishName: 'Honey Badger',
    tagline: '超频模式 × 钝感解构 × 狂暴破坏',
    defenseMechanism: '攻击性外化 / 躁狂防御 (Acting Out & Manic Defense)',
    goldenQuote: '生不带来死不带去，今天谁让我受委屈，我就让谁受工伤。',
    symptoms: [
      '反卷先锋，对职场 PUA 与道德绑架具备天生免死抗体。',
      '精神状态在“算了不计较”和“大家都别活了”之间反复横跳并精准滑向后者。',
      '越是压抑反骨越硬，信奉“只要我没有道德，别人就道德绑架不了我”。',
    ],
    factoryWarning:
      '⚠️ 严禁试图用“大局观”或“多体谅他人”进行思想规训。这会瞬间点燃引线激活无差别攻击，直至现场秩序彻底报废。',
    bestPartner: {
      key: 'capybara',
      name: '水豚体',
      reason: '面对水豚“随你折腾我自岿然不动”的松弛，蜜獾的怒火会打在棉花上自行熄灭。',
    },
    worstEnemy: {
      key: 'owl',
      name: '猫头鹰体',
      reason: '猫头鹰试图讲逻辑、摆证据、讲因果，而蜜獾只在乎能不能当场掀桌。',
    },
    radarMetrics: {
      batteryRemain: 92,
      overloadIndex: 28,
      rebellionLevel: 99,
    },
    themeColor: '#EF4444', // 警报赤红
  },

  owl: {
    key: 'owl',
    chineseName: '猫头鹰体',
    englishName: 'Owl',
    tagline: '省电模式 × 高敏深思 × 秩序重组',
    defenseMechanism: '理智化防御 / 认知隔离避风港 (Intellectualization)',
    goldenQuote: '人类的情绪喧闹而无用，不如来看这张对齐好的逻辑树图。',
    symptoms: [
      '白天像个节能待机玩偶，一到午夜 12 点思维神经开始通电狂欢。',
      '极度反感毫无营养的寒暄煽情，擅长把剧烈心理创伤翻译成客观学术因果链。',
      '找他哭诉时第一反应不是递纸巾，而是掏出纸笔帮你做 SWOT 归因分析。',
    ],
    factoryWarning:
      '⚠️ 严禁在其分析逻辑漏洞时打断他并说“你太较真了”。他会用长达五千字的严密论证把你反驳到怀疑人生。',
    bestPartner: {
      key: 'capybara',
      name: '水豚体',
      reason: '水豚从不反驳猫头鹰的冷酷分析，只是默默当个安宁的数据接收器。',
    },
    worstEnemy: {
      key: 'badger',
      name: '蜜獾体',
      reason: '蜜獾毫无章法的掀桌行为破坏了因果闭环，让猫头鹰算力当场死机。',
    },
    radarMetrics: {
      batteryRemain: 38,
      overloadIndex: 82,
      rebellionLevel: 50,
    },
    themeColor: '#F59E0B', // 赛博琥珀黄
  },

  chameleon: {
    key: 'chameleon',
    chineseName: '变色龙体',
    englishName: 'Chameleon',
    tagline: '超频模式 × 钝感生存 × 柔性重塑',
    defenseMechanism: '假自我防御 / 顺从型社交拟态 (False Self Adaptation)',
    goldenQuote: '见人说人话，见鬼说鬼话，独处时不知道自己在说什么话。',
    symptoms: [
      '人群中的气氛调节大师，光速镜像模仿在场最有话语权的人的喜好。',
      '常因“把每个人都照顾得很好”获好评，但关上家门那一秒整个人陷入极度空虚。',
      '极度害怕冷场和人际冲突，宁可委屈自己迎合离谱提案也不当破坏体面的反对者。',
    ],
    factoryWarning:
      '⚠️ 严禁反复逼问他：“你到底真正想要什么？你的真实想法是什么？” 这会直接击中空心内核引发系统解离。',
    bestPartner: {
      key: 'octopus',
      name: '章鱼体',
      reason: '章鱼渴望发号施令，变色龙擅长执行与情绪承托，组成最高效的表象搭档。',
    },
    worstEnemy: {
      key: 'hedgehog',
      name: '刺猬体',
      reason: '刺猬对迎合拥有天生鉴伪雷达，变色龙的讨好会被刺猬当场识破并冷眼相待。',
    },
    radarMetrics: {
      batteryRemain: 68,
      overloadIndex: 58,
      rebellionLevel: 20,
    },
    themeColor: '#EC4899', // 霓虹粉紫
  },
};
