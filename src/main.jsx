import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TaskApp from './components/TaskApp'
import {TaskContextProvider} from './context/TaskContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <TaskApp></TaskApp>
    </TaskContextProvider>
  </React.StrictMode>,
)
