import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { MotionConfig } from 'framer-motion'
import App from './App.jsx'
import './index.css'
import './App.css'

const theme = createTheme({
  palette: { primary: { main: '#3b82f6' }, secondary: { main: '#8b5cf6' } },
  typography: { fontFamily: 'Inter, sans-serif' },
  shape: { borderRadius: 16 },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </ThemeProvider>
  </React.StrictMode>
)
