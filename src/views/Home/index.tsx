import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import HomeStore from '../../store/modules/home'
interface IProps extends HomeStore {}
@inject('homeStore')
@observer
class Home extends Component<IProps> {
  render() {
    // console.log(this.props.homeStore.homeNum)
    return (
      <div>
        Home
      </div>
    )
  }
}

export default Home
