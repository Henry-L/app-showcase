import { RocketOutlined, FundViewOutlined, DatabaseOutlined, CarOutlined, BgColorsOutlined, TrophyOutlined, KeyOutlined } from '@ant-design/icons';

// App data - add more apps here as you build them
export const apps = [
  {
    id: 4,
    title: 'Commute Tracker',
    description: 'Track and analyze your daily commute patterns',
    url: '/apps/commute-tracker',
    color: '#fa8c16',
    icon: <CarOutlined />,
    tags: ['Python', 'Maps API', 'Cloud Run'],
    isTest: false
  },
  {
    id: 5,
    title: 'Art Studio',
    description: 'Generate print-ready PDFs from creative prompts using AI',
    url: '/apps/art-studio',
    color: '#eb2f96',
    icon: <BgColorsOutlined />,
    tags: ['Typescript', 'AI', 'Prompt Engineering'],
    isTest: false
  },
  {
    id: 6,
    title: 'Chess Slots',
    description: 'A slot machine game featuring chess piece symbols',
    url: '/apps/chess-slots',
    color: '#cf1322',
    icon: <TrophyOutlined />,
    tags: ['Go', 'Games', 'Cloud Run'],
    isTest: false
  },
  {
    id: 7,
    title: 'Escape Room',
    description: 'A two-player escape room puzzle game for couples',
    url: '/apps/escape-room',
    color: '#722ed1',
    icon: <KeyOutlined />,
    tags: ['Typescript', 'Games', 'Multiplayer'],
    isTest: false
  },
  // Test apps below
  {
    id: 1,
    title: 'Test App',
    description: 'A test application showcasing Firebase integration',
    url: '/apps/test-app',
    color: '#1890ff',
    icon: <RocketOutlined />,
    tags: ['Python', 'Firebase', 'Cloud Run'],
    isTest: true
  },
  {
    id: 2,
    title: 'Test App',
    description: 'A test application showcasing Firebase integration',
    url: '/apps/test-app',
    color: '#FFBF00',
    icon: <FundViewOutlined />,
    tags: ['Python', 'Firebase', 'Cloud Run'],
    isTest: true
  },
  {
    id: 3,
    title: 'DB Test',
    description: 'Database testing and experimentation application',
    url: '/apps/db-test',
    color: '#52c41a',
    icon: <DatabaseOutlined />,
    tags: ['Typescript', 'Database', 'Cloud Run'],
    isTest: true
  },
  // Add more apps here in the future
];

