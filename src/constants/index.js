import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  sports,
  toyCar,
  chief
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'debugging',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  
  {
    name: 'React JS',
    icon: reactjs,
  },
 
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'mongodb',
    icon: nodejs
  }
];

const experiences = [
  {
    title: 'cantonment board high school',
    company_name: 'SSC',
    icon: coverhunt,
    iconBg: '#333333',
    date: '2005 - 2015',
  },
  {
    title: 'notredanmne college mymensingh',
    company_name: 'HSC',
    icon: microverse,
    iconBg: '#333333',
    date: '2015 - 2017',
  },
  {
    title: 'zhejiang gongshang univarsity china',
    company_name: 'BSC',
    icon: kelhel,
    iconBg: '#333333',
    date: '2017 - 2019 (drop out)',
  },
  {
    title: 'Nasirabad college Mymensingh',
    company_name: 'BSS , second year',
    icon: dcc,
    iconBg: '#333333',
    date: ' 2021 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'sports tutorial',
    description: 'students can enroll their favourite sports tutorial.but he or she has to be pay for enroll course.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: '(node js)express',
        color: 'pink-text-gradient',
      }
    ],
    image: sports,
    clientrepo: 'https://github.com/zahidhasan398/assignment12-client',
    serverrepo:'https://github.com/zahidhasan398/assignment12-server',
    demo: 'https://module5-b5f9e.web.app/',
  },
  {
    id: 'project-2',
    name: 'Toy car universe',
    description:
      '•	this is for child website.user can add their car toy.you can see added car on home page',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
      {
        name: '(node js)express',
        color: 'pink-text-gradient',
      }
    ],
    image: toyCar,
    clientrepo: 'https://github.com/zahidhasan398/assignment11-client',
    serverrepo:'https://github.com/zahidhasan398/assignment11-server',
    demo: 'https://toy-car-f12d3.web.app/',
  },
  {
    id: 'project-3',
    name: 'chinese yammy',
    description: 'this website about chinese recipe',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind css',
        color: 'green-text-gradient',
      },
      {
        name: 'mongo db',
        color: 'pink-text-gradient',
      },
      {
        name: '(node js)express',
        color: 'pink-text-gradient',
      }
    ],
    image: chief,
    clientrepo: ' https://github.com/zahidhasan398/assignment9-client',
    serverrepo:'https://github.com/zahidhasan398/assignment9-server',
    demo: 'https://fir-f2087.web.app/',
  }
];

export { services, technologies, experiences, projects };
