import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Main from './components/restarant-main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
    <App />

  </StrictMode>,
)
