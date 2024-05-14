import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './rq/App.tsx'
// import ZustandApp from './zustand/App.tsx'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/*<ZustandApp />*/}
  </React.StrictMode>,
)
