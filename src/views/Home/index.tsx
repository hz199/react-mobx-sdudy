import React, { PureComponent } from 'react'
import { observer, inject } from 'mobx-react'
import { Button } from 'antd'
import { HomeInterfaces } from '../../interfaces'

interface IProps extends HomeInterfaces.IHome {}

@inject('homeStore')
@observer
class Home extends PureComponent<IProps> {
  render() {
    const { homeStore } = this.props
    // console.log(this.props)
    return (
      <div>
        {homeStore.homeNum}
        <div>
          <Button type="primary" onClick={() => homeStore.handle()}>点击</Button>
        </div>
      </div>
    )
  }
}

export default Home
