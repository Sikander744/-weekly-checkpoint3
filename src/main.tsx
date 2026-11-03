
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import the main CSS file
import './index.css'

// Import the shopping cart application
import App from './App.tsx'

// Find the root element and start the React app
createRoot(document.getElementById('root')!).render(
  // Help check for possible problems during development
  <StrictMode>
    {/* Display the shopping cart application */}
    <App />
  </StrictMode>,
)
