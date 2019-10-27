import HomePage from './components/HomePage';
import Board from './components/Board';

const routes = [
  {
    component: HomePage,
    path: '/',
  },
  {
    component: Board,
    path: '/board/:id',
    props: true
  }
];

export default routes;
