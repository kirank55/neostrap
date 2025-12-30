import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import "@fontsource/syne/400.css"
// import "@fontsource/syne/600.css"
import "@fontsource/syne/700.css"
import "@fontsource/syne-mono/latin-ext-400.css"
// import "@fontsource/syne/800.css"
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
