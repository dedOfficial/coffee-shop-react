import AssortmentRoute from './assortmentRoute/AssortmentRoute';
import MainRoute from './mainRoute/MainRoute';

const routes = [
  {
    path: '/assortment',
    component: AssortmentRoute,
    name: 'assortment',
  },
  {
    path: '/',
    component: MainRoute,
    name: 'home',
  },
];

export default routes;
