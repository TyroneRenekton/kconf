// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '首页',
    to: '#/',
    icon: 'home',
  },
  {
    name: '反馈',
    to: 'https://github.com/kun368/kconf/issues',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '帮助',
    to: 'https://www.zzkun.com',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

const asideMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: 'home',
  },
  {
    name: '配置广场',
    path: '/KTable',
    icon: 'cascades',
  },
  {
    name: '添加配置',
    path: '/AddConfig',
    icon: 'creative',
  },
];

export { headerMenuConfig, asideMenuConfig };
