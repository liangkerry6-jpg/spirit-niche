import { Question } from '@/types';

export const STUDENT_QUESTIONS: Question[] = [
  {
    id: 1,
    sceneTitle: '小组作业 · 死线将至全员隐身',
    description:
      '汇报只剩 48 小时，大作业群聊一片死寂，另外 3 人毫无动静。你的本能反应是：',
    options: [
      { id: 'A', text: '指望别人不如指望自己，直接通宵一个人把 PPT 和讲稿全包揽肝完。', species: 'octopus' },
      { id: 'B', text: '血压飙升，在群里直接开大：“截止今晚不交内容的，汇报名单直接除名。”', species: 'badger' },
      { id: 'C', text: '默默把群设为免打扰：“反正大家都摆烂，天塌大家死，看谁急。”', species: 'capybara' },
      { id: 'D', text: '整理出详细步骤时间表，按章节艾特所有人明确分工与交付节点。', species: 'owl' },
      { id: 'E', text: '心里快急疯了，但在群里依然发可怜表情包小心翼翼地逐个催促。', species: 'chameleon' },
      { id: 'F', text: '极度抗拒催人的社交内耗，甚至想直接退群私聊老师申请单人汇报。', species: 'hedgehog' },
    ],
  },
  {
    id: 2,
    sceneTitle: '熄灯卧谈 · 毫无预警的情绪局',
    description:
      '宿舍熄灯你刚爬上床，室友突然极其兴奋地开启了大声八卦与情感拷问。此时你会：',
    options: [
      { id: 'A', text: '一秒清醒翻身坐起，化身控场主持人，精准盘问细节并引导八卦节奏。', species: 'octopus' },
      { id: 'B', text: '床帘拉死，降噪耳塞塞紧贴墙睡，内心默念“别 cue 我别找我”。', species: 'hedgehog' },
      { id: 'C', text: '闭着眼当催眠白噪音听，偶尔含糊应两声，不知不觉直接睡着。', species: 'capybara' },
      { id: 'D', text: '直接探出头开麦：“明天早八点名，能闭嘴睡觉了吗？要聊出去聊。”', species: 'badger' },
      { id: 'E', text: '躺着静静听，等大家争论不休时冷不丁丢出一句客观理性的逻辑归纳。', species: 'owl' },
      { id: 'F', text: '即使很困，依然在被窝里积极捧哏接梗，尽力维持宿舍和谐氛围。', species: 'chameleon' },
    ],
  },
  {
    id: 3,
    sceneTitle: '突发任务 · 毫无意义的形式主义',
    description:
      '周日深夜班群突发通知：要求半小时内全员下载某款 App 答题截图上报。你会：',
    options: [
      { id: 'A', text: '截图别人的合格图，修图软件改个名字 1 分钟搞定交差，接着干自己的事。', species: 'capybara' },
      { id: 'B', text: '在私密小群疯狂开喷，吐槽形式主义把大学生当数据工具人。', species: 'badger' },
      { id: 'C', text: '快速走完流程交掉，顺便把简化版教程发在班群帮其他人排坑。', species: 'octopus' },
      { id: 'D', text: '虽然反感，但为了不被私聊催促和通报，老老实实配合提交。', species: 'chameleon' },
      { id: 'E', text: '去搜是否有自动化脚本跳过，顺便在心里分析该软件的权限合规漏洞。', species: 'owl' },
      { id: 'F', text: '装死不看群，拖到第二天被班委单独私聊艾特了才最后压哨提交。', species: 'hedgehog' },
    ],
  },
  {
    id: 4,
    sceneTitle: '公共空间 · 自习室被纸巾恶意占座',
    description:
      '期末周图书馆一座难求，空桌上仅放了一包开封纸巾长期无人，明显被恶意占座。你会：',
    options: [
      { id: 'A', text: '当场把纸巾拨到旁边直接坐下，心想“占着不坐视为弃权，有种来找茬”。', species: 'badger' },
      { id: 'B', text: '默默叹口气转身离开去其他地方找，不想为这点破事产生任何摩擦。', species: 'capybara' },
      { id: 'C', text: '调出图书馆超时管理条款，拍照取证并依规叫管理员清理现场收座。', species: 'owl' },
      { id: 'D', text: '浑身不适，觉得此地气场被污染，立刻走开去完全没人的冷门角落。', species: 'hedgehog' },
      { id: 'E', text: '见有人靠近时微笑着客气询问：“同学这里有人吗？没人我能坐一个角吗？”', species: 'chameleon' },
      { id: 'F', text: '光速扫视全场分析流动规律，同时打开预约系统寻找可替代的自习位。', species: 'octopus' },
    ],
  },
  {
    id: 5,
    sceneTitle: '边界侵犯 · 半熟同学突然发“在吗”',
    description:
      '晚上 10 点，一位平时完全不熟的同专业同学突然发来“在吗？”且无下文。你会：',
    options: [
      { id: 'A', text: '脑内警铃大作，立刻反思是不是有借作业或推杂事的风险，选择已读不回。', species: 'hedgehog' },
      { id: 'B', text: '直球秒回：“直接说事，怎么了？” 不给对方打太极留白的机会。', species: 'badger' },
      { id: 'C', text: '隔一阵客气回复：“刚在洗漱才看到，怎么啦？有什么事吗？”', species: 'chameleon' },
      { id: 'D', text: '迅速翻看对方近期动态与重叠课程，推理其这通询问的真实意图。', species: 'owl' },
      { id: 'E', text: '本能秒回一个问号，同时大脑开始自动排期接下来可能被插队的事项。', species: 'octopus' },
      { id: 'F', text: '扫一眼弹窗直接把手机反扣在桌上，继续刷剧发呆，全当没看见。', species: 'capybara' },
    ],
  },
  {
    id: 6,
    sceneTitle: '极端任务 · 期末硬核复习与死线撞车',
    description:
      '明天要考极难的专业必修课，手头还有大作业截止，时间严重不足。你的状态是：',
    options: [
      { id: 'A', text: '多任务连轴转：一边倍速刷网课一边赶作业，挑战生理极限。', species: 'octopus' },
      { id: 'B', text: '拿出草稿纸快速列出知识树与采分点，只抓高概率考点，放弃枝节。', species: 'owl' },
      { id: 'C', text: '摔课本放弃挣扎：“及格万岁挂科重修，为了绩点减寿几年不划算。”', species: 'badger' },
      { id: 'D', text: '转发锦鲤，草草翻一遍重点便心安理得睡去，坚信车到山前必有路。', species: 'capybara' },
      { id: 'E', text: '抱着书躲进最偏僻的走廊或楼梯间，戴上降噪耳机谁也不见背到天亮。', species: 'hedgehog' },
      { id: 'F', text: '疯狂跟同寝室学霸对重点求押题，靠抱团互助来对冲内心的崩溃感。', species: 'chameleon' },
    ],
  },
  {
    id: 7,
    sceneTitle: '同辈压力 · 同专业卷王在群里晒成果',
    description:
      '专业群里有人突然若无其事地发出一张国家级竞赛一等奖证书或顶级大厂实习 Offer，群里一片膜拜。你的真实微反应是：',
    options: [
      { id: 'A', text: '迅速加入捧哏大军，狂发“大佬带带”、“强强强”表情包，顺应社交狂欢。', species: 'chameleon' },
      { id: 'B', text: '内心冷笑一声，极其反感这种公开孔雀开屏行为，直接右键屏蔽或开启免打扰。', species: 'badger' },
      { id: 'C', text: '客观拆解对方的履历因果链：“他大二就进了导师组，资源倾斜度高，属于预期内结果。”', species: 'owl' },
      { id: 'D', text: '瞬间感到被刺痛与社交过载，默默退出微信群，感到需要与这种喧嚣物理隔绝。', species: 'hedgehog' },
      { id: 'E', text: '焦虑感瞬间拉满，立刻打开电脑去搜索该竞赛的报名时间与下一届招募要求。', species: 'octopus' },
      { id: 'F', text: '毫无波澜地吃了一口零食，心里想着：“厉害是真厉害，但关我什么事呢。”', species: 'capybara' },
    ],
  },
  {
    id: 8,
    sceneTitle: '终极能量代谢 · 独享无课周日的自愈方式',
    description:
      '熬过极度心累的一周，迎来毫无打扰、无早八无死线的周日。你最本质的回血方式是：',
    options: [
      { id: 'A', text: '拉紧床帘在小空间闭关，或一个人找一家安静的小店喝咖啡看书，享受完全断联的独立结界。', species: 'hedgehog' },
      { id: 'B', text: '睡到自然醒，躺在床上刷搞笑视频发呆，或在阳台长椅晒太阳放空，全天心率不超 70。', species: 'capybara' },
      { id: 'C', text: '把散乱的书桌衣柜彻底收拾干净，重新制定一份清晰的下阶段日程表。', species: 'owl' },
      { id: 'D', text: '出校门吃爆辣火锅或通宵唱 K、打竞技游戏，靠强烈感官刺激把憋屈全排出去。', species: 'badger' },
      { id: 'E', text: '闲不下来：把下学期竞赛资料整理好、顺手背完 100 个单词，心里才踏实。', species: 'octopus' },
      { id: 'F', text: '约上一两位相处最舒服、无需伪装的密友，找个地方慢悠悠喝奶茶聊心事，用温情连接回血。', species: 'chameleon' },
    ],
  },
];
