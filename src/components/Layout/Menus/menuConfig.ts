import { HomeOutlined, MenuFoldOutlined } from '@ant-design/icons'

export interface MenusConfig {
  icon: any
  title: string
  path?: string
  SubMenu?: Array<MenusConfig>
}

const menus: Array<MenusConfig> = [
  {
    icon: HomeOutlined,
    title: '首页',
    path: '/app'
  },
  {
    icon: MenuFoldOutlined,
    title: '表格',
    SubMenu: [
      {
        icon: MenuFoldOutlined,
        path: '/app/tables/table1',
        title: '导出Excel'
      },
      {
        icon: MenuFoldOutlined,
        path: '/app/tables/importTable',
        title: '导入Excel'
      }
    ]
  },
  {
    icon: MenuFoldOutlined,
    title: '组件',
    SubMenu: [
      {
        icon: MenuFoldOutlined,
        path: '/app/components/loadingBar',
        title: 'LoadingBar'
      },
      {
        icon: MenuFoldOutlined,
        path: '/app/components/dragAblePage',
        title: '简易拖拽'
      }
    ]
  }
]

export default menus
