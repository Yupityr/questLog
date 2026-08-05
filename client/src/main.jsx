import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ChaptersProvider } from './context/ChaptersContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/pixelify-sans/400.css'
import '@fontsource/pixelify-sans/700.css'
import '@fontsource/press-start-2p/400.css'
import '@fontsource/silkscreen/400.css'
import '@fontsource/silkscreen/700.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ChaptersProvider>
          <App />
        </ChaptersProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
