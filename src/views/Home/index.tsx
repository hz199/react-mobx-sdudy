import React, { PureComponent } from 'react'
import { observer, inject } from 'mobx-react'
import { Button } from 'antd'
import { IHome } from '../../interfaces'
import { Link } from 'react-router-dom'

interface IProps extends IHome {}

@inject('homeStore')
@observer
class Home extends PureComponent<IProps> {
  render() {
    const { homeStore } = this.props
    return (
      <div>
        {homeStore.homeNum}
        <div>
          <Button type="primary" onClick={() => homeStore.handle()}>点击</Button>
        </div>
        <hr/>
        <ul>
          <li><Link to="/app/binary">二叉树</Link></li>
        </ul>
      </div>
    )
  }
}

export default Home
