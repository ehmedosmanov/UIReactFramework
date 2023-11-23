import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/system'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: "#42a5f5",
    },
    secondary: {
      main2: '#ba68c8'
    }
  },
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 600
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600
    },
    h3: {
      fontSize: '1rem',
      fontWeight: 600
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
