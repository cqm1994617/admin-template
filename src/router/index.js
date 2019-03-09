import Home from '../pages/home/index.vue'
import Template1 from '../pages/template1/index.vue'
import Template2 from '../pages/template2/index.vue'
import Chart from '../pages/chart/index.vue'
import Inner from '../pages/innerPage/index.vue'
import DChart from '../pages/chart/d-chart.vue'
import Form from '../pages/form/index.vue'
import China from '../pages/chart/china.vue'

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'template-1',
        component: Template1,
        meta: { title: '模板1' },
        children: [
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
      },
      {
        path: 'template-2',
        component: Template2,
        meta: { title: '模板2' },
      }
    ]
  }
]


export default routes
