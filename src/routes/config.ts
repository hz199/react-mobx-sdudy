import { lazy } from 'react'

interface Meta {
  title: string
  rules: string[]
  /**
   * 存在flag 不计入 tagPage 导航
   */
  flag?: boolean
}

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
  {
    name: 'Binary',
    path: '/app/binary',
    component: lazy(() => import('../views/Binary')),
    meta: {
      title: '二叉树',
      rules: ['loginRequired']
    }
  },
  {
    name: 'LinkedList',
    path: '/app/linkedList',
    component: lazy(() => import('../views/LinkedList')),
    meta: {
      title: '链表',
      rules: ['loginRequired']
    }
  }
]

export default routes