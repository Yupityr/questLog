import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChaptersProvider } from './context/ChaptersContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ChaptersProvider>
        <App />
      </ChaptersProvider>
    </AuthProvider>
  </StrictMode>,
)
