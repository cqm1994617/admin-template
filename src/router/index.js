import Index from '../pages/index.vue'
import Home from '../pages/home/index.vue'
import Chart from '../pages/chart/index.vue'
import Inner from '../pages/innerPage/index.vue'
import DChart from '../pages/chart/d-chart.vue'
import Form from '../pages/form/index.vue'
import China from '../pages/chart/china.vue'

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        path: 'home',
        component: Home,
        meta: { title: '首页' }
      },
      {
        path: 'chart',
        component: Chart,
        meta: { title: '静态图表' }
      },
      {
        path: 'inner',
        component: Inner,
        meta: { title: '内部页' }
      },
      {
        path: 'd-chart',
        component: DChart,
        meta: { title: '动态图表' }
      },
      {
        path: 'form',
        component: Form,
        meta: { title: '表单' }
      },
      {
        path: 'china-map',
        component: China,
        meta: { title: '中国地图' }
      }
    ]
  }
]

export default routes
