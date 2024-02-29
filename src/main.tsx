import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {GlobalStyle, ColorsTheme} from './styles/global.js'
import { ThemeProvider } from 'styled-components'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={ ColorsTheme }>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)