import React from 'react'
import { Layout, Drawer } from 'antd'
import { Scrollbars } from 'react-custom-scrollbars'
import { inject, observer } from 'mobx-react'
import AdminHeader from './components/Layout/Header'
import Menus from './components/Layout/Menus'
import { AppInterfaces } from './interfaces'
import './App.less'
import throttle from './utils/throttle'
import RouterApp from './routes'

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

  // 点击抽屉遮罩关闭
  handleDrawerClose = () => {
    this.setState({
      drawerVisible: false
    })
  }

  // 切换菜单
  handleMenuClick = () => {
    const { settingsStore } = this.props
    const { collapsed, drawerVisible } = this.state

    // 抽屉组件显示
    if (settingsStore.screenWidth < ScreenStatus) {
      this.setState({
        collapsed: false,
        drawerVisible: !drawerVisible
      })
    } else {
      this.setState({
        collapsed: !collapsed,
        drawerVisible: false
      })
    }
  }

  render() {
    const { placement, drawerVisible, collapsed } = this.state
    const { settingsStore, ...routerProps } = this.props

    const Sider = (
      <Layout.Sider style={{position: 'fixed',left: 0, top: 0, bottom: 0}} collapsed={collapsed}>
        <div className="admin-logo">logo</div>
        <Scrollbars>
          <Menus></Menus>
        </Scrollbars>
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
          this.handleDrawerClose()
        }}
      >
        {Sider}
      </Drawer>
    )

    const layoutStyles: React.CSSProperties = {
      paddingLeft: (settingsStore.screenWidth < ScreenStatus ? 0 : (collapsed ? 80 : 200)),
      transition: 'all 0.2s'
    }

    return (
      <Layout style={{ minHeight: '100vh' }}>
        {settingsStore.screenWidth < ScreenStatus ? DrawerView : Sider}
        <Layout
          style={layoutStyles}>
          <AdminHeader
            onMenuClick={() => {
              this.handleMenuClick()
            }}
          ></AdminHeader>
          
          <Layout.Content
            style={{ margin: '8px 16px 0', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ background: '#fff', borderRadius: '2px', padding: '5px', flexGrow: 1 }}>
              <React.Suspense fallback={<div>......</div>}>
                <RouterApp {...routerProps}></RouterApp>
              </React.Suspense>
            </div>
            <Layout.Footer style={{ textAlign: 'center' }}>
              react-admin ©2019 Created by H.Z
            </Layout.Footer>
          </Layout.Content>
        </Layout>
      </Layout>
    )
  }
}

export default App


    //<React.Suspense fallback={<div>loading...</div>}>
      //    <RouterApp {...props} />
       // </React.Suspense>