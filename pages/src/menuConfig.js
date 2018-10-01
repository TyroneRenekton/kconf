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
    path: '/contract/search',
    icon: 'cascades',
  },
  {
    name: '合同管理',
    path: '/contract',
    icon: 'cascades',
    children: [
      { name: '合同中心', path: '/contract/center' },
      { name: '我的合同', path: '/contract/my' },
      { name: '合同查询', path: '/contract/search' },
    ],
  },
  {
    name: 'KTable',
    path: '/KTable',
    icon: 'home',
  },
];

export { headerMenuConfig, asideMenuConfig };
