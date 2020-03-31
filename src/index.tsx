import React from 'react'
import ReactDOM from 'react-dom'
// import { hot } from 'react-hot-loader/root'
import './index.less'
import * as serviceWorker from './serviceWorker'
const Page = React.lazy(() => import('./Page'))

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<div>loading...</div>}>
      <Page />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
