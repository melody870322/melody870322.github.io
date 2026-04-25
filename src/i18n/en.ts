export default {
  // Site metadata
  site: {
    title: 'Shih-Ting Wang',
    description: 'Ph.D. student in Mechanical Engineering at National Chung Hsing University. Research interests in VLA, deep learning, and robotics.',
  },

  // Navigation
  nav: {
    home: 'Home',
    about: 'About',
    research: 'Research',
    research_results: 'Research',
    research_vla: 'Vision-Language-Action Models',
    research_perception: 'Dynamic Environment Perception & Visual Localization',
    research_action: 'Action Recognition',
    research_handwriting: 'Handwriting Recognition & Generation',
    publications: 'Publications',
    projects: 'Projects',
    timeline: 'Timeline',
    learning: 'Learning',
    learning_teaching: 'Teaching',
    learning_research: 'Research',
    intro: 'Introduction',
    install: 'Installation',
    install_cli_vscode: 'Claude Code Installation (CLI & VS Code)',
    install_desktop: 'Claude Desktop Installation Guide',
    basics: 'Basic Operations & Workflow',
    prompting: 'Prompt Frameworks & Task Decomposition',
    memory: 'Memory & Context Management',
    extensions: 'Extensions & Automation',
    ext_mcp: 'MCP',
    ext_skills: 'Skills',
    ext_subagents: 'Subagents',
    ext_hooks: 'Hooks',
    ext_plugin: 'Plugin',
    ai_agent: 'Piecing Together AI Agents',
    ai_agent_basics: 'Basic Concepts',
    ai_agent_gemini_mcp: 'Gemini CLI Getting Started & First MCP Integration',
    ai_agent_notion_workflow: 'Building Your First AI Workflow with Notion',
    ai_agent_security: 'Least Privilege & Security Boundaries',
    ai_agent_primitives: 'Roles of Tools, Resources & Prompts',
    ai_agent_classroom_tools: 'Classroom-Style Tool Design on Off-the-Shelf MCP',
    ai_agent_python_prep: 'Python Basics: Preparing to Build Your Own MCP Server',
    ai_agent_custom_server: 'Building Your Own MCP Server',
    nb_intro_apps: 'Introduction & Applications',
    nb_principles: 'Principles & Usage Concepts',
    nb_tutorials: 'Application Tutorials',
    nb_basics: 'Getting Started',
    nb_organize: 'Content Organization & Understanding',
    nb_media: 'Multimedia & Visualization',
    nb_interactive: 'Interactive Learning',
    tensorrt: 'TensorRT',
    deep_learning: 'Deep Learning',
    ros2: 'ROS2',
    virtual_env: 'Virtual Environment Setup',
    urdf: 'URDF Format & Model Description',
    urdf_overview: 'Overview & Basic Concepts',
    urdf_structure: 'Model Structure & Components',
    urdf_example: 'Basic Structure & Example Walkthrough',
    urdf_preview: 'Viewing, Editing & Previewing Files',
    urdf_troubleshoot: 'Common Model Issues & Troubleshooting',
    pybullet: 'PyBullet',
    gazebo: 'Gazebo',
    pb_guide: 'Learning Guide & Roadmap',
    pb_setup: 'Environment Setup & Testing',
    gallery: 'Gallery',
    contact: 'Contact',
    ubuntu: 'Ubuntu System Operations',
  },

  // Home page
  home: {
    hero: {
      greeting: '',
      name: 'Shih-Ting Wang',
      title: 'Ph.D. Student, Dept. of Mechanical Engineering, NCHU',
      affiliation: '',
      adjunct: 'Adjunct Lecturer, Dept. of Mechanical and Electro-Mechanical Engineering, TKU',
      adjunct_url: 'https://www.me.tku.edu.tw/me/?page_id=3421',
      description: '',
      cta_contact: 'Contact Me',
      cta_publications: 'Publications',
      cta_cv: 'View CV',
    },
    sections: {
      research: 'Research Interests',
      featured_publications: 'Featured Publications',
      news: 'News',
      view_all: 'View All',
    },
  },

  // Research interests
  research_interests: [
    {
      title: 'Vision-Language-Action Models',
      description: 'Developing multimodal models that enable robots to understand human instructions through visual and linguistic inputs and execute tasks autonomously.',
    },
    {
      title: 'Dynamic Environment Perception & Visual Localization',
      description: 'Researching object segmentation in dynamic scenes, potentially dynamic object recognition, and visual odometry enhancement, combining textual and visual information to improve perception robustness and localization accuracy of autonomous mobile robots in complex environments.',
    },
    {
      title: 'Action Recognition',
      description: 'Researching real-time human action recognition for autonomous mobile robots, combining keyframe extraction, deep temporal learning, and edge AI optimization to enhance behavioral understanding and safety perception in human-robot interaction.',
    },
  ],

  // Publications page
  publications_page: {
    title: 'Publications',
    subtitle: '',
    journals: 'Journal Papers',
    conferences: 'Conference Papers',
    others: 'Others',
  },

  // Timeline page
  timeline_page: {
    title: 'Timeline',
    subtitle: 'A record of teaching, research, and academic service.',
    categories: {
      honor: 'Honor',
      teaching: 'Teaching',
      advising: 'Advising',
      service: 'Service',
      assistant: 'Assistantship',
    },
  },

  // Contact page
  contact: {
    title: 'Contact',
    subtitle: 'Feel free to reach out via email.',
    email_section: 'Email',
    personal: 'Personal',
    location_section: 'Location',
    location: 'Taichung, Taiwan',
    affiliation_section: 'Affiliations',
    nchu: 'National Chung Hsing University',
    nchu_dept: 'Ph.D. Student, Dept. of Mechanical Engineering',
    tku: 'Tamkang University',
    tku_dept: 'Adjunct Lecturer, Dept. of Mechanical and Electro-Mechanical Engineering',
  },

  // Footer
  footer: {
    copyright: '© {year} Shih-Ting Wang. All rights reserved.',
  },
} as const;
