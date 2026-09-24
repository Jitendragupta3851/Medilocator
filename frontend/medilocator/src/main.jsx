import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'

import { API_URL } from './config.js'
import PathMapper from './PathMapper.jsx'

axios.interceptors.request.use((config) => {
  if (typeof config.url === 'string' && config.url.startsWith('http://localhost:3000')) {
    config.url = `${API_URL}${config.url.slice('http://localhost:3000'.length)}`
  }
  return config
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PathMapper />
  </StrictMode>,
)
