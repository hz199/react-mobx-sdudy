import { lazy } from 'react'

interface Meta {
  title: string
  rules: string[]
  /**
   * 存在flag 不计入 tagPage 导航
   */
  flag?: boolean
}
// React.LazyExoticComponent<typeof Home>
export interface RouteConfig<T = any> {
  name: string
  path: string
  component: T // ComponentType
  meta: Meta
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/app',
    component: lazy(() => import('../views/Home')),
    meta: {
      title: '首页',
      rules: ['loginRequired']
    }
  },
]

export default routes