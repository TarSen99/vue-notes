import initApi from './services/api'
import initRouter from './router'
import initStore from './store'
import routes from './routes'

export default function (Vue) {
  Vue.use(initApi);

  const router = initRouter(routes);
  const store = initStore();

  return {
    router,
    store
  }
}
