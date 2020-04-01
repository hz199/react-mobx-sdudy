import React, { PureComponent } from 'react'
import { observer, inject } from 'mobx-react'
import { IHome } from '../../interfaces'
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
          <button onClick={() => homeStore.handle()}>点击</button>
        </div>
      </div>
    )
  }
}

export default Home
