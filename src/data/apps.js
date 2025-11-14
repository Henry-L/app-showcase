import { RocketOutlined, FundViewOutlined, DatabaseOutlined } from '@ant-design/icons';

// App data - add more apps here as you build them
export const apps = [
  {
    id: 1,
    title: 'Test App',
    description: 'A test application showcasing Firebase integration',
    url: '/apps/test-app',
    color: '#1890ff',
    icon: <RocketOutlined />,
    tags: ['Python', 'Firebase', 'Cloud Run']
  },
  {
    id: 2,
    title: 'Test App',
    description: 'A test application showcasing Firebase integration',
    url: '/apps/test-app',
    color: '#FFBF00',
    icon: <FundViewOutlined />,
    tags: ['Python', 'Firebase', 'Cloud Run']
  },
  {
    id: 3,
    title: 'DB Test',
    description: 'Database testing and experimentation application',
    url: '/apps/db-test',
    color: '#52c41a',
    icon: <DatabaseOutlined />,
    tags: ['Python', 'Database', 'Cloud Run']
  },
  // Add more apps here in the future
];

