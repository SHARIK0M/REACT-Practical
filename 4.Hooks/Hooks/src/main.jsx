import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Hooks/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
