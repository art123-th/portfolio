import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

function AppWrapper() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return <App />
}