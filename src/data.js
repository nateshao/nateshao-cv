import hzty from './assets/logo_hzty.png';
import txdata from './assets/logo_txdata.png';
import jxyq from './assets/bg.png'; //此公司已关闭，放个空白图片上去
import bootplus from './assets/bootplus.png';
import springboot_mybatisplus from './assets/springboot_mybatisplus.png';
import fastjson_spring_boot_starter from './assets/fastjson-spring-boot-starter.png';
import webkettle from './assets/webkettle.png';
import anires from './assets/anires.png';
import ibooks from './assets/ibooks.png';
import blog from './assets/blog.png';
import myBook from './assets/myBook.png';

import dHome from './assets/d_home.svg';
import dSkills from './assets/d_skills.svg';
import dExp from './assets/d_exp.svg';
import dWorks from './assets/d_works.svg';
import dContact from './assets/d_contact.svg';
import sGithub from './assets/s_github.svg';
import sWeiBo from './assets/s_wb.svg';
// import sSf from './assets/s_sf.svg';
import sBlog from './assets/s_blog.svg';
import sZh from './assets/s_zh.svg';
// import sJj from './assets/s_Jj.svg';
import SGitee from "./assets/s_gitee.svg"
import SJianshu from "./assets/s_jianshu.svg"
import SCSDN from "./assets/s_csdn.svg"

export default {
  cn: {
    header: {
      langList: ['中', '英'],
      titleList: [{
          svg: dHome,
          title: '首页'
        },
        {
          svg: dSkills,
          title: '专业技能'
        },
        {
          svg: dExp,
          title: '工作经历'
        },
        {
          svg: dWorks,
          title: '项目经验'
        },
        {
          svg: dContact,
          title: '联系我'
        }
      ]
    },
    footer: ['Released under the Apache License', 'All Rights Reserved'],
    overview: {
      infoList: ['21岁', '千羽', '深圳', '桐杰'],
      quote: '不浮躁，不偏激，爱编程，爱后端，爱新技术，爱运动，执行力和学习能力都棒棒哒！',
      desList: ['我叫邵桐杰，Java开发', '深圳', '1210331079@qq.com']
    },
    skill: {
      outCircleList: [{
          bg: {
            backgroundColor: 'rgba(121,100,102,0.8)'
          },
          name: 'Java'
        },
        {
          bg: {
            backgroundColor: 'rgba(49,65,82,0.8)'
          },
          name: 'SpringBoot'
        },
        {
          bg: {
            backgroundColor: 'rgba(193,131,106,0.8)'
          },
          name: 'SpringCloud'
        },
        {
          bg: {
            backgroundColor: 'rgba(117,148,179,0.8)'
          },
          name: 'RabbitMQ'
        },
        {
          bg: {
            backgroundColor: 'rgba(147,147,189,0.8)'
          },
          name: 'MyBatis'
        },
        {
          bg: {
            backgroundColor: 'rgba(172,223,159,0.8)'
          },
          name: 'Linux'
        },
        {
          bg: {
            backgroundColor: 'rgba(66,66,66,0.8)'
          },
          name: 'JVM'
        },
        {
          bg: {
            backgroundColor: 'rgba(71,83,94,0.8)'
          },
          name: 'Vue'
        }
      ],
      innerCircleList: [{
          bg: {
            backgroundColor: 'rgba(179,164,140,0.8)'
          },
          name: 'MySQL'
        },
        {
          bg: {
            backgroundColor: 'rgba(171,209,220,0.8)'
          },
          name: 'Redis'
        },
        {
          bg: {
            backgroundColor: 'rgba(238,215,163,0.8)'
          },
          name: 'GitHub'
        },
        {
          bg: {
            backgroundColor: 'rgba(207,184,178,0.8)'
          },
          name: 'SSM'
        }
      ],
      desList: [
        '我叫邵桐杰，21岁，坐标深圳，是一名Java开发工程师',
        '熟悉软件开发的整个流程，有较强的逻辑思维能力',
        '主要涉及技术：Java后端开发、SpringBoot、公众号开发、开源爱好者、Linux',
        '有良好的文档编写和代码书写规范，能独立解决问题、百折不挠、细节控'
      ],
      links: [{
        title: '● Github',
        des: 'https://github.com/nateshao',
        url: 'https://github.com/nateshao'
      }, {
        title: '● 技术笔记',
        des: 'https://nateshao.gitee.io',
        url: 'https://nateshao.gitee.io'
      }]
    },
    exp: {
      expList: [{
          title: '新原子(深圳)科技有限公司',
          time: '2020年7月~2020年9月',
          post: '交易结算开发组/Java开发实习生',
          img: {
            backgroundImage: `url(${hzty})`
          },
          contentList: ['编写、维护测试用例，负责项目交易结算部分单元测试', '优化数据存储，自定义实现MessagePack的write和read方法', 'Jvisualvm对JVM的内存、CPU、线程、GC垃圾回收等进行监控']
        }
      ]
    },
    works: {
      worksList: [{
        title: '个人博客网站',
        des: '千羽的编程时光-邵桐杰的技术博客网站',
        url: 'https://nateshao.gitee.io',
        img: {
          src: `${blog}`,
          alt: '千羽的编程时光-邵桐杰的技术博客网站'
          },
        },
        {
          title: 'PowerMock',
          des: '基于SpringBoot + MVC + MyBatis的PowerMock 单元测试模拟框架',
          url: 'https://github.com/nateshao/powermock',
          img: {
            src: `${bootplus}`,
            alt: '基于SpringBoot + Shiro + MyBatisPlus的权限管理框架'
          }
        },
        {
          title: 'fastjson-spring-boot-starter',
          des: '深度学习并实战Java 设计模式',
          url: 'https://github.com/nateshao/nateshao-design-demo',
          img: {
            src: `${fastjson_spring_boot_starter}`,
            alt: '深度学习并实战Java 设计模式'
          }
        },
        {
          title: 'SpringBoot集成Vue',
          des: 'SpringBoot集成Vue集成前后端分离可以快速开发',
          url: 'https://gitee.com/nateshao/springboot-vue',
          img: {
            src: `${springboot_mybatisplus}`,
            alt: 'SpringBoot集成Vue集成前后端分离可以快速开发'
          }
        },
        {
          title: 'nateshao-boot-demo',
          des: '基于 SpringBoot 深度学习并实战)',
          url: 'https://github.com/nateshao/nateshao-boot-demo',
          img: {
            src: `${webkettle}`,
            alt: '基于 SpringBoot 深度学习并实战)'
          }
        },
        {
          title: '个人简历',
          des: '一个会动的简历',
          url: 'https://nateshao.gitee.io/cv/index.html',
          img: {
            src: `${anires}`,
            alt: '一个会动的简历'
          }
        },
        {
          title: 'SpringCloud',
          des: 'Spring Cloud深度学习并实战',
          url: 'https://github.com/nateshao/spring-cloud-test',
          img: {
            src: `${ibooks}`,
            alt: 'Spring Cloud深度学习并实战'
          }
        },
        {
          title: 'myBook',
          des: '使用GitBook记录开发笔记',
          url: 'https://nateshao.gitee.io',
          img: {
            src: `${myBook}`,
            alt: '使用GitBook记录开发笔记'
          }
        }
      ],
      viewMore: '前往GitHub上查看更多'
    },
    contact: {
      title: '联系我',
      desList1: ['灵感', '代码', '梦想', '未来'],
      desList2: ['喜欢尝试，期待新鲜事物', '编程即兴趣，兴趣即未来', '行路有良友，便是捷径', '带上我吧，一起看到更大的世界'],
      download: '下载简历',
      fileList: [{
          title: 'HTML版',
          url: ''
        },
        {
          title: 'PDF版',
          url: ''
        }
      ],
      typeList: [{
          title: 'GitHub',
          icon: sGithub,
          url: 'https://github.com/nateshao'
        },
        {
          title: '码云',
          icon: SGitee,
          url: 'https://gitee.com/nateshao'
        },
        {
          title: '个人博客',
          icon: sBlog,
          url: 'https://nateshao.gitee.io'
        },
        {
          title: '简书',
          icon: SJianshu,
          url: 'https://www.jianshu.com/u/e09d6a95ad4b'
        },
        {
          title: 'CSDN',
          icon: SCSDN,
          url: 'https://i.csdn.net/#/uc/profile?spm=1008.2028.3001.5111'
        },
        {
          title: '知乎',
          icon: sZh,
          url: 'https://www.zhihu.com/people/yong-yuan-de-da-an-9'
        }
      ],
      links: [{
        title: '● 开发笔记',
        des: 'https://nateshao.gitee.io',
        url: 'https://nateshao.gitee.io'
      }]
    }
  },
  en: {
    header: {
      langList: ['CN', 'EN'],
      titleList: [{
          svg: dHome,
          title: 'home'
        },
        {
          svg: dSkills,
          title: 'skills'
        },
        {
          svg: dExp,
          title: 'exp'
        },
        {
          svg: dWorks,
          title: 'works'
        },
        {
          svg: dContact,
          title: 'contact'
        }
      ]
    },
    footer: ['Released under the Apache License', 'All Rights Reserved'],
    overview: {
      infoList: ['22years', 'B.S.', 'ShenZhen', 'On Job'],
      quote: 'Not impetuous, not extreme, love programming, love back end, love new technology, love sports, execution and learning ability are awesome!',
      desList: ['My name is Zhou siwei, a Java software engineer', 'ShenZhen TEYANG network technology co., LTD', '1210331079@qq.com']
    },
    skill: {
      outCircleList: [{
          bg: {
            backgroundColor: 'rgba(121,100,102,0.8)'
          },
          name: 'Java'
        },
        {
          bg: {
            backgroundColor: 'rgba(49,65,82,0.8)'
          },
          name: 'SpringBoot'
        },
        {
          bg: {
            backgroundColor: 'rgba(193,131,106,0.8)'
          },
          name: 'SpringCloud'
        },
        {
          bg: {
            backgroundColor: 'rgba(117,148,179,0.8)'
          },
          name: 'RabbitMQ'
        },
        {
          bg: {
            backgroundColor: 'rgba(147,147,189,0.8)'
          },
          name: 'MyBatis'
        },
        {
          bg: {
            backgroundColor: 'rgba(172,223,159,0.8)'
          },
          name: 'Linux'
        },
        {
          bg: {
            backgroundColor: 'rgba(66,66,66,0.8)'
          },
          name: 'miniP'
        },
        {
          bg: {
            backgroundColor: 'rgba(71,83,94,0.8)'
          },
          name: 'Vue'
        }
      ],
      innerCircleList: [{
          bg: {
            backgroundColor: 'rgba(179,164,140,0.8)'
          },
          name: 'MySQL'
        },
        {
          bg: {
            backgroundColor: 'rgba(171,209,220,0.8)'
          },
          name: 'Redis'
        },
        {
          bg: {
            backgroundColor: 'rgba(238,215,163,0.8)'
          },
          name: 'GitHub'
        },
        {
          bg: {
            backgroundColor: 'rgba(207,184,178,0.8)'
          },
          name: 'Nacos'
        }
      ],
      desList: [
        'My name is ShaoTongJie, 22 years old, located in Shenzhen, and I am a Java software engineer with three years of Java EE experience.',
        'Familiar with the whole process of software development, with strong logical thinking ability',
        'Mainly involved in technology: Java back-end development, aggregation payment, public account development, open source enthusiasts, Linux',
        'Good documentation and code writing skills, able to solve problems independently, persistent and detail-oriented'
      ],
      links: [{
        title: '● Github',
        des: 'https://github.com/nateshao',
        url: 'https://github.com/nateshao'
      }, {
        title: '● Technical Notes',
        des: 'https://nateshao.gitee.io',
        url: 'https://nateshao.gitee.io'
      }]
    },
    exp: {
      expList: [{
          title: 'Hangzhou TEYANG network technology co., LTD',
          time: '2019.04-Now',
          post: 'Technical department /Java software engineer',
          img: {
            backgroundImage: `url(${hzty})`
          },
          contentList: ['Using high concurrency, Multithreading provides solutions for (Internet + healthcare)', 'Responsible for technical documentation related to product or project', 'Use Linux command to complete daily system deployment and maintenance work']
        },
        {
          title: 'Jiangxi 3xData information technology co. LTD',
          time: '2017.12-2019.03',
          post: 'Technical department /Java software engineer',
          img: {
            backgroundImage: `url(${txdata})`
          },
          contentList: ['Using SSM, SpringCloud, Nacos, VueJS and other cutting-edge development technologies', 'Excellent employee certificate awarded and sealed by the company', 'Interface with front-end developers to solve bugs raised by testers']
        },
        {
          title: 'Jiangxi yiqiang weiying information technology co., LTD',
          time: '2016.06-2017.11',
          post: 'Technical department /Java software engineer',
          img: {},
          contentList: ['Participate in the discussion of related project requirements, outline design, and complete the core code writing', 'Development with SpringBoot, SpringMVC and Mybatis', 'Continuous code reconstruction and optimization, analysis of system deficiencies, improve system performance']
        }
      ]
    },
    works: {
      worksList: [{
          title: 'bootplus',
          des: 'A privilege management framework based on SpringBoot + Shiro + MyBatisPlus',
          url: 'https://gitee.com/nateshao/bootplus',
          img: {
            src: `${bootplus}`,
            alt: 'A privilege management framework based on SpringBoot + Shiro + MyBatisPlus'
          },
        },
        {
          title: 'SpringBoot integration MyBatisPlus',
          des: 'SpringBoot integration with MyBatisPlus integration with Shiro allows rapid development',
          url: 'https://gitee.com/nateshao/springboot_mybatisplus',
          img: {
            src: `${springboot_mybatisplus}`,
            alt: 'SpringBoot integration with MyBatisPlus integration with Shiro allows rapid development'
          }
        },
        {
          title: 'fastjson-spring-boot-starter',
          des: 'Spring boot starter for fastjson',
          url: 'https://gitee.com/nateshao/fastjson-spring-boot-starter',
          img: {
            src: `${fastjson_spring_boot_starter}`,
            alt: 'Spring boot starter for fastjson'
          }
        },
        {
          title: 'webkettle',
          des: 'Web kettle developed a set of distributed integrated scheduling, management,ETL development user professional B/S architecture tools',
          url: 'https://github.com/nateshao/webkettle',
          img: {
            src: `${webkettle}`,
            alt: 'Web kettle developed a set of distributed integrated scheduling, management,ETL development user professional B/S architecture tools'
          }
        },
        {
          title: 'anires',
          des: 'A dynamic resume',
          url: 'https://nateshao.gitee.io/anires/index.html',
          img: {
            src: `${anires}`,
            alt: 'A dynamic resume'
          }
        },
        {
          title: 'ibooks',
          des: 'Record technical development notes with VuePress',
          url: 'https://nateshao.gitee.io/ibooks',
          img: {
            src: `${ibooks}`,
            alt: 'Record technical development notes with VuePress'
          }
        },
        {
          title: 'Personal blog site',
          des: 'My blog site',
          url: 'https://nateshao.gitee.io/',
          img: {
            src: `${blog}`,
            alt: 'My blog site'
          }
        },
        {
          title: 'myBook',
          des: 'Use GitBook to record development notes',
          url: 'https://nateshao.github.io/myBook',
          img: {
            src: `${myBook}`,
            alt: 'Use GitBook to record development notes'
          }
        }
      ],
      viewMore: 'Check out more on My GitHub'
    },
    contact: {
      title: 'Contact Me',
      desList1: ['INSPIRATION', 'CODE', 'DREAM', 'FUTURE'],
      desList2: [
        'Like to try, look forward to something new',
        'Programming is interested, interest is the future',
        'Line road friends, is a shortcut',
        'With me, see the bigger world together'
      ],
      download: 'Download resume',
      fileList: [{
          title: 'HTML',
          url: ''
        },
        {
          title: 'PDF',
          url: ''
        }
      ],
      typeList: [{
          title: 'GitHub',
          icon: sGithub,
          url: 'https://github.com/nateshao'
        },
        {
          title: 'Gitee',
          icon: SGitee,
          url: 'https://gitee.com/nateshao'
        },
        {
          title: 'Blog',
          icon: sBlog,
          url: 'https://nateshao.gitee.io'
        },
        {
          title: 'Jianshu',
          icon: SJianshu,
          url: 'https://www.jianshu.com/u/02cbf31a043a'
        },
        {
          title: 'CSDN',
          icon: SCSDN,
          url: 'https://blog.csdn.net/qq_30930805'
        },
        {
          title: 'ZhiHu',
          icon: sZh,
          url: 'https://www.zhihu.com/people/nateshao'
        },
        {
          title: 'WeiBo',
          icon: sWeiBo,
          url: 'http://weibo.com/jayinfo'
        }
      ],
      links: [{
        title: '● Development Notes',
        des: 'https://nateshao.gitee.io',
        url: 'https://nateshao.github.io'
      }]
    }
  }
};