import './index.css'
import { App } from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from '@shared/ui/primitives/Toaster.tsx'
import { MODE } from '@shared/config/env.config.ts'

if (MODE !== 'production') {
  console.log('App version:', __APP_VERSION__)
}

if (__IS_STAGING__) {
  console.log('App is currently on stage mode')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>,
)
