export default {
  // Site metadata
  site: {
    title: '王詩婷',
    description: '國立中興大學機械工程學系博士生，研究興趣包含 VLA、深度學習與機器人技術。',
  },

  // Navigation
  nav: {
    home: '首頁',
    about: '關於我',
    research: '研究',
    research_results: '研究成果',
    research_vla: '視覺語言動作模型',
    research_perception: '動態環境感知與視覺定位',
    research_action: '動作辨識',
    research_handwriting: '手寫字體辨識及撰寫',
    publications: '著作',
    projects: '專案',
    timeline: '歷程',
    learning: '學習',
    learning_teaching: '教學',
    learning_research: '研究',
    intro: '介紹',
    install: '安裝',
    install_cli_vscode: 'Claude Code 安裝（CLI 與 VS Code）',
    install_desktop: 'Claude Desktop 安裝教學',
    basics: '基礎操作與流程',
    prompting: '提示詞框架與任務拆解',
    memory: '記憶設定與上下文管理',
    extensions: '能力擴充與自動化',
    ext_mcp: 'MCP',
    ext_skills: 'Skills',
    ext_subagents: 'Subagents',
    ext_hooks: 'Hooks',
    ext_plugin: 'Plugin',
    ai_agent: 'AI Agent 拼圖',
    ai_agent_basics: '基礎觀念',
    nb_intro_apps: '介紹與應用',
    nb_principles: '運作原理與使用觀念',
    nb_tutorials: '應用教學',
    nb_basics: '基礎入門',
    nb_organize: '內容整理與理解',
    nb_media: '多媒體與視覺化輸出',
    nb_interactive: '學習互動功能',
    tensorrt: 'TensorRT',
    deep_learning: '深度學習',
    ros2: 'ROS2',
    virtual_env: '建立虛擬環境',
    urdf: 'URDF 格式與模型描述',
    urdf_overview: '概述與基本觀念',
    urdf_structure: '模型結構與組成說明',
    pybullet: 'PyBullet',
    gazebo: 'Gazebo',
    pb_guide: '學習導覽與地圖',
    pb_setup: '環境安裝與執行測試',
    ubuntu: 'Ubuntu系統相關操作',
    gallery: '相冊',
    contact: '聯絡',
  },

  // Home page
  home: {
    hero: {
      greeting: '',
      name: '王詩婷',
      title: '國立中興大學 機械工程學系 博士生',
      affiliation: '',
      adjunct: '私立淡江大學 機械與機電工程學系 兼任講師',
      adjunct_url: 'https://www.me.tku.edu.tw/me/?page_id=3421',
      description: '',
      cta_contact: '聯絡我',
      cta_publications: '著作列表',
      cta_cv: '查看履歷',
    },
    sections: {
      research: '研究方向',
      featured_publications: '精選著作',
      news: '最新消息',
      view_all: '查看全部',
    },
  },

  // Research interests
  research_interests: [
    {
      title: '視覺語言動作模型',
      description: '開發多模態模型，使機器人能透過視覺與語言輸入理解人類指令並自主執行任務。',
    },
    {
      title: '動態環境感知與視覺定位',
      description: '研究動態場景中的物件分割、潛在動態物體辨識與視覺里程計定位增強，結合文字與視覺資訊提升自主移動機器人在複雜環境中的感知穩健性與定位精度。',
    },
    {
      title: '動作辨識',
      description: '研究自主移動機器人中的即時人體動作辨識，結合關鍵影格擷取、深度時序學習與邊緣 AI 優化，提升人機互動中的行為理解與安全感知能力。',
    },
  ],

  // Publications page
  publications_page: {
    title: '著作',
    subtitle: '',
    journals: '期刊論文',
    conferences: '研討會論文',
    others: '其他',
  },

  // Timeline page
  timeline_page: {
    title: '歷程',
    subtitle: '教學、研究與學術服務紀錄。',
    categories: {
      honor: '榮譽',
      teaching: '教學',
      advising: '指導',
      service: '學術服務',
      assistant: '助理',
    },
  },

  // Contact page
  contact: {
    title: '聯絡',
    subtitle: '歡迎透過 Email 與我聯繫。',
    email_section: '電子信箱',
    personal: '個人',
    location_section: '所在地',
    location: '台灣 台中',
    affiliation_section: '所屬單位',
    nchu: '國立中興大學',
    nchu_dept: '機械工程學系 博士生',
    tku: '私立淡江大學',
    tku_dept: '機械與機電工程學系 兼任講師',
  },

  // Footer
  footer: {
    copyright: '© {year} 王詩婷 版權所有',
  },
} as const;
