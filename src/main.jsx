import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global';

import { MyContext } from './myContext';

import { Routes } from './routes'

import theme from './styles/theme'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MyContext.Provider value={{email: 'victor@email.com'}}>
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </StrictMode>,
)
