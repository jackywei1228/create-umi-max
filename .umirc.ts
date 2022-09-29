import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'LOG CENTER',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: 'User Manager',
      path: '/usermanager',
      component: './usermanager',
    },
    {
      name: 'Device Log Config',
      path: '/devicelogconfig',
      routes: [
        {
          path: '/devicelogconfig',
          redirect: '/devicelogconfig/logexactmatch',
        },
        {
          name: 'Exact Match',
          path: '/devicelogconfig/logexactmatch',
          component: './logexactmatch',
        },
        {
          name: 'Skuid Match',
          path: '/devicelogconfig/logskuidmatch',
          component: './logskuidmatch',
        },
        {
          name: 'Fingerprint Match',
          path: '/devicelogconfig/logfingerprintmatch',
          component: './logfingerprintmatch',
        },
      ],
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
});
