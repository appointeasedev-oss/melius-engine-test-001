import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// Improved by adding a loading state to enhance user experience
const loadingState = document.createElement('div')
loadingState.textContent = 'Loading...'
document.getElementById('root').appendChild(loadingState)
setTimeout(() => {
  document.getElementById('root').removeChild(loadingState)
}, 2000)