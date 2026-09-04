import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const navigationEntry = window.performance.getEntriesByType?.('navigation')?.[0]
const isPageReload = navigationEntry?.type === 'reload' || window.performance.navigation?.type === 1

if (isPageReload) {
  const resetScroll = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

  if (window.location.hash) {
    window.history.replaceState(window.history.state, '', `${window.location.pathname}${window.location.search}`)
  }

  resetScroll()
  window.addEventListener('pageshow', () => {
    resetScroll()
    window.requestAnimationFrame(resetScroll)
    window.setTimeout(resetScroll, 120)
  }, { once: true })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
