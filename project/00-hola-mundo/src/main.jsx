import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './assets/App'
import './assets/index.css'
const Button = ({text})=>{
  return (
    <div>
      <a href=''>{text}</a>
    </div>
    
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<React.Fragment>
  <App />
</React.Fragment>

)
