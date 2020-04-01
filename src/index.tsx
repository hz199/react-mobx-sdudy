import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
// import { hot } from 'react-hot-loader/root'
import './index.less'
import store from './store'
import * as serviceWorker from './serviceWorker'
const Page = React.lazy(() => import('./Page'))

ReactDOM.render(
  <Provider {...store}>
    <React.StrictMode>
      <React.Suspense fallback={<div>loading...</div>}>
        <Page />
      </React.Suspense>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
