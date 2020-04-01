import React from 'react'
import './App.less'
import RouterApp from './routes'
import { RouteComponentProps } from 'react-router-dom'

function App (props: RouteComponentProps) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.....
        </p>
        <React.Suspense fallback={<div>loading...</div>}>
          <RouterApp {...props} />
        </React.Suspense>
      </header>
    </div>
  )
}

export default App
