import React from 'react'
// import RouterApp from './routes'
import { Layout, Drawer } from 'antd'
import { inject, observer } from 'mobx-react'
import AdminHeader from './components/Layout/Header'
import Menus from './components/Layout/Menus'
import { AppInterfaces } from './interfaces'
import './App.less'
import throttle from './utils/throttle'

/**
 * 当屏幕宽度小于 765 抽屉组件显示
 */
const ScreenStatus = 765

@inject('settingsStore')
@observer
class App extends React.PureComponent<AppInterfaces.IAppProps> {
  state: AppInterfaces.IAppState = {
    collapsed: false,
    drawerVisible: false,
    placement: 'left'
  }

  componentDidMount() {
    window.addEventListener(
      'resize',
      throttle(() => {
        this.props.settingsStore.setScreenWidth(document.body.offsetWidth)
      }, 600),
      false
    )
    // 先运行一次
    this.props.settingsStore.setScreenWidth(document.body.offsetWidth)
  }

  render() {
    const { placement, drawerVisible, collapsed } = this.state
    const { settingsStore } = this.props

    const Sider = (
      <Layout.Sider collapsed={collapsed}>
        <Menus></Menus>
      </Layout.Sider>
    )

    const DrawerView = (
      <Drawer
        className="zh-app__drawer"
        placement={placement}
        closable={false}
        visible={drawerVisible}
        width={200}
        onClose={() => {
          // this.handleDrawerClose()
        }}
      >
        {Sider}
      </Drawer>
    )

    return (
      <Layout style={{ minHeight: '100vh' }}>
        {settingsStore.screenWidth < ScreenStatus ? DrawerView : Sider}
        <Layout>
          <AdminHeader></AdminHeader>
        </Layout>
      </Layout>
    )
  }
}

export default App


    //<React.Suspense fallback={<div>loading...</div>}>
      //    <RouterApp {...props} />
       // </React.Suspense>