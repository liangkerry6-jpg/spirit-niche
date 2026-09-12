export type SpeciesKey =
  | 'capybara'
  | 'hedgehog'
  | 'octopus'
  | 'badger'
  | 'owl'
  | 'chameleon';

export interface Option {
  id: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  text: string;
  species: SpeciesKey;
}

export interface Question {
  id: number;
  sceneTitle: string; // 题目场景副标题，例如：【选课系统崩溃】
  description: string; // 题目详细情境描述
  options: Option[];
}

export interface SpeciesProfile {
  key: SpeciesKey;
  chineseName: string; // 如：水豚体
  englishName: string; // 如：Capybara
  tagline: string; // 维度组合标签
  defenseMechanism: string; // 心理学机制术语
  goldenQuote: string; // 一句话生存金句
  visualConcept: string; // 视觉概念描述（海报主物种区展示）
  symptoms: string[]; // 3 条典型行为症状
  factoryWarning: string; // 出厂警示 (使用禁忌)
  bestPartner: {
    key: SpeciesKey;
    name: string;
    reason: string;
  };
  worstEnemy: {
    key: SpeciesKey;
    name: string;
    reason: string;
  };
  radarMetrics: {
    batteryRemain: number; // 电量余量百分比 (0-100)
    overloadIndex: number; // 敏感内耗度 (0-100)
    rebellionLevel: number; // 反骨破坏力 (0-100)
  };
  themeColor: string; // 十六进制主题色
}

export interface TheoryItem {
  id: string;
  nameCn: string;
  nameEn: string;
  authorYear: string;
  coreInsight: string;
  referenceUrl: string;
}
