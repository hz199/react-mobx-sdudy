import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
// import { hot } from 'react-hot-loader/root'
import './index.less'
import stores from './stores'
import * as serviceWorker from './serviceWorker'
const Page = React.lazy(() => import('./Page'))

ReactDOM.render(
  <Provider {...stores}>
    <React.Suspense fallback={<div>loading.....</div>}>
      <Page />
    </React.Suspense>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
