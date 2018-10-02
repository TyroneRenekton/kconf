// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: 'home',
  },
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '帮助',
    path: 'https://www.zzkun.com',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

const asideMenuConfig = [
  {
    name: 'Welcome',
    path: '/',
    icon: 'home',
  },
  {
    name: '配置广场',
    path: '/KTable',
    icon: 'cascades',
  },
  {
    name: 'AddConfig',
    path: '/AddConfig',
    icon: 'home',
  },
];

export { headerMenuConfig, asideMenuConfig };
