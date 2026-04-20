export type TimelineCategory =
  | 'honor'
  | 'teaching'
  | 'advising'
  | 'service'
  | 'assistant';

export interface TimelineItem {
  category: TimelineCategory;
  en: string;
  zh: string;
}

export interface TimelineYearGroup {
  year: string;
  items: TimelineItem[];
}

export const timelineData: TimelineYearGroup[] = [
  {
    year: '2026',
    items: [
      {
        category: 'teaching',
        en: 'Adjunct Lecturer, Department of Mechanical and Electro-Mechanical Engineering, Tamkang University.',
        zh: '擔任淡江大學 機械與機電工程學系 兼任講師。',
      },
      {
        category: 'advising',
        en: 'Advised students Chen Guan-Ting, Wu Jen-Yun, Huang Sheng-Wei, and Shih Chi-En of the Bachelor Program of Smart Creativity Engineering, NCHU, on their projects and competitions.',
        zh: '指導中興大學智慧創意工程學士學位學程學生陳冠廷、吳貞昀、黃晟偉、史其恩做專題以及參賽。',
      },
      {
        category: 'assistant',
        en: 'MOE Teaching Assistant, Bachelor Program of Smart Creativity Engineering, NCHU.',
        zh: '擔任中興大學 智慧創意工程學士學位學程 教育部兼任助理。',
      },
      {
        category: 'assistant',
        en: 'NSTC Research Assistant, Bachelor Program of Smart Creativity Engineering, NCHU.',
        zh: '擔任中興大學 智慧創意工程學士學位學程 國科會兼任助理。',
      },
    ],
  },
  {
    year: '2025',
    items: [
      {
        category: 'advising',
        en: 'Advised students Chen Guan-Ting, Wu Jen-Yun, Huang Sheng-Wei, and Shih Chi-En of the Bachelor Program of Smart Creativity Engineering, NCHU, on their projects and competitions.',
        zh: '指導中興大學智慧創意工程學士學位學程學生陳冠廷、吳貞昀、黃晟偉、史其恩做專題以及參賽。',
      },
      {
        category: 'teaching',
        en: 'Adjunct Lecturer, Department of Mechanical and Electro-Mechanical Engineering, Tamkang University.',
        zh: '擔任淡江大學 機械與機電工程學系 兼任講師。',
      },
      {
        category: 'assistant',
        en: 'MOE Teaching Assistant, Bachelor Program of Smart Creativity Engineering, NCHU.',
        zh: '擔任中興大學 智慧創意工程學士學位學程 教育部兼任助理。',
      },
      {
        category: 'assistant',
        en: 'NSTC Research Assistant, Bachelor Program of Smart Creativity Engineering, NCHU.',
        zh: '擔任中興大學 智慧創意工程學士學位學程 國科會兼任助理。',
      },
      {
        category: 'service',
        en: 'Reviewer for K. O. Yang, J. Koh, and J. W. Choi, "UCFFormer: Recognizing human actions from multimodal sensors using unified contrastive fusion transformer," <em>Neurocomputing</em>, vol. 655, Art. no. 131374, Nov. 2025.',
        zh: '擔任「K. O. Yang, J. Koh, and J. W. Choi, "UCFFormer: Recognizing human actions from multimodal sensors using unified contrastive fusion transformer," <em>Neurocomputing</em>, vol. 655, Art. no. 131374, Nov. 2025」之 Reviewer。',
      },
    ],
  },
  {
    year: '2024',
    items: [
      {
        category: 'honor',
        en: 'Awarded the NSTC Ph.D. Student Research Scholarship (2024).',
        zh: '獲得 113 年國家科學及技術委員會博士生研究獎學金。',
      },
      {
        category: 'teaching',
        en: 'Adjunct Lecturer, Department of Mechanical and Electro-Mechanical Engineering, Tamkang University.',
        zh: '擔任淡江大學 機械與機電工程學系 兼任講師。',
      },
      {
        category: 'advising',
        en: 'Co-advised student Kao Yu-Shao of the Department of Mechanical and Electro-Mechanical Engineering, Tamkang University, on his undergraduate project.',
        zh: '協助指導淡江大學機械與機電工程學系學生高宇劭做專題。',
      },
      {
        category: 'assistant',
        en: 'NSTC Research Assistant, Bachelor Program of Smart Creativity Engineering, NCHU.',
        zh: '擔任中興大學 智慧創意工程學士學位學程 國科會兼任助理。',
      },
    ],
  },
  {
    year: '2023',
    items: [
      {
        category: 'assistant',
        en: 'Assistant, Tamkang University USR Program.',
        zh: '擔任淡江大學 USR 計畫 兼任助理。',
      },
      {
        category: 'assistant',
        en: 'NSTC Research Assistant, Department of Mechanical and Electro-Mechanical Engineering, Tamkang University.',
        zh: '擔任淡江大學 機械與機電工程學系 國科會兼任助理。',
      },
      {
        category: 'assistant',
        en: 'MOE Teaching Assistant, Department of Mechanical and Electro-Mechanical Engineering, Tamkang University.',
        zh: '擔任淡江大學 機械與機電工程學系 教育部兼任助理。',
      },
    ],
  },
  {
    year: '2021',
    items: [
      {
        category: 'assistant',
        en: 'NSTC Research Assistant, Department of Mechanical and Electro-Mechanical Engineering, Tamkang University.',
        zh: '擔任淡江大學 機械與機電工程學系 國科會兼任助理。',
      },
      {
        category: 'assistant',
        en: 'Research Assistant, Department of Electrical Engineering, National Taiwan Normal University.',
        zh: '擔任國立臺灣師範大學 電機系 研究助理。',
      },
      {
        category: 'assistant',
        en: 'MOE Teaching Assistant, Department of Mechanical and Electro-Mechanical Engineering, Tamkang University.',
        zh: '擔任淡江大學 機械與機電工程學系 教育部兼任助理。',
      },
    ],
  },
  {
    year: '2020',
    items: [
      {
        category: 'assistant',
        en: 'NSTC Research Assistant, Department of Mechanical and Electro-Mechanical Engineering, Tamkang University.',
        zh: '擔任淡江大學 機械與機電工程學系 國科會兼任助理。',
      },
    ],
  },
  {
    year: '2019',
    items: [
      {
        category: 'honor',
        en: 'Inducted as a member of The Phi Tau Phi Scholastic Honor Society.',
        zh: '獲得斐陶斐榮譽會員證書。',
      },
    ],
  },
];
