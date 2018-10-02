// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BasicLayout from './layouts/BasicLayout';
import Welcome from './pages/Welcome';
import KTable from './pages/KTable';
import AddConfig from './pages/AddConfig';
import NotFound from './pages/NotFound';
import UpdateConfig from './pages/UpdateConfig/UpdateConfig';

const routerConfig = [
  {
    path: '/',
    layout: BasicLayout,
    component: Welcome,
  },
  {
    path: '/KTable',
    layout: BasicLayout,
    component: KTable,
  },
  {
    path: '/AddConfig',
    layout: BasicLayout,
    component: AddConfig,
  },
  {
    path: '/UpdateConfig/:configId',
    layout: BasicLayout,
    component: UpdateConfig,
  },
  {
    path: '*',
    layout: BasicLayout,
    component: NotFound,
  },
];

export default routerConfig;
