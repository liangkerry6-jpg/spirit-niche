import { SpeciesKey } from '@/types';

export interface DeskSignItem {
  statusTitle: string;
  statusEn: string;
  content: string;
  warningFoot: string;
}

/** 「课桌/工位电子立牌」六物种文案字典。 */
export const DESK_SIGN_DATA: Record<SpeciesKey, DeskSignItem> = {
  capybara: {
    statusTitle: '正在省电待机',
    statusEn: 'STANDBY MODE',
    content: '正在省电待机，非必要请勿投喂。有事微信留言，看到全看缘分。',
    warningFoot: '⚠️ 功耗剩余 15% · 拍打无法唤醒，只会加速进入深度睡眠',
  },
  hedgehog: {
    statusTitle: '静音结界开启',
    statusEn: 'PHYSICAL NOISE-OFF',
    content: '已佩戴物理降噪，安全社交距离 1.5 米。请勿突然在背后拍肩，刺很扎手。',
    warningFoot: '⚠️ 结界已通电 · 凡无预约靠近者，均视为默认接受冰冷注视',
  },
  badger: {
    statusTitle: '今日易燃易炸',
    statusEn: 'HIGH EXPLOSIVE',
    content: '今日易燃易爆炸，谢绝任何形式画大饼。杠就是你对，骂就是我不服。',
    warningFoot: '⚠️ 极度危险 · 严禁劝我“顾全大局”，当场掀桌概不负责',
  },
  owl: {
    statusTitle: '逻辑深度校准',
    statusEn: 'SYSTEM ANALYZING',
    content: 'CPU 正在满载运算，情绪模块已关闭。寒暄请绕道，提需求请带数据依据。',
    warningFoot: '⚠️ 逻辑重地 · 凡说出“随便/你看着办”者，将被罚做归因分析',
  },
  octopus: {
    statusTitle: '全线程已过载',
    statusEn: 'OCTO-OVERLOAD',
    content: '八根触手均在赶工，大脑单核燃烧中。别催，再催就往你电脑屏幕上喷墨。',
    warningFoot: '⚠️ 高压运行 · 每多加一项临时任务，寿命自然缩短 3 天',
  },
  chameleon: {
    statusTitle: '面具暂停营业',
    statusEn: 'MIMICRY OFF',
    content: '社交电量已彻底见底，假笑面具维修中。暂时丧失迎合能力，请允许我做个死人。',
    warningFoot: '⚠️ 拟态失效 · 严禁追问“你到底怎么了”，当事人只想静静躺平',
  },
};
