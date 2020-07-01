import * as React from 'react'
import { Layout, Breadcrumb, Avatar, Dropdown, Menu } from 'antd'
import { HomeOutlined, MenuFoldOutlined } from '@ant-design/icons'
import './index.less'

interface IProps {
}

// const menuIconStyle: React.CSSProperties = {
//   fontSize: 18,
//   margin: '0 30px',
//   fontWeight: 'bold',
//   verticalAlign: '-3px',
//   cursor: 'pointer'
// }

const AdminHeader = (props: IProps) => {
  const BreadcrumbElement = (
    <Breadcrumb className="admin-breadcrumb">
      <Breadcrumb.Item >
        <HomeOutlined />
        <span>首页</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <span>哈哈哈</span>
      </Breadcrumb.Item>
    </Breadcrumb>
  )

  const menuDropdown = (
    <Menu>
      <Menu.Item>
        &nbsp;&nbsp;&nbsp;登&nbsp;&nbsp;出
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/hz199/react-admin-ts">
          &nbsp;&nbsp;&nbsp; github
        </a>
      </Menu.Item>
    </Menu>
  )

  return (
    <Layout.Header style={{ background: '#fff', padding: 0 }} className="clearfix">
      <div className="pull-left" style={{padding: '0 20px', cursor: 'pointer'}}>
        <MenuFoldOutlined/>
      </div>
      <div className="breadcrumb pull-left">{BreadcrumbElement}</div>
      <div className="header-auth-wrapper pull-right">
        <Dropdown overlay={menuDropdown} placement="bottomCenter">
          <Avatar>Avatar</Avatar>
        </Dropdown>
      </div>
    </Layout.Header>
  )
}

export default AdminHeader
