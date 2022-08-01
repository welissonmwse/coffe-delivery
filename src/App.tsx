import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { CartContexProvaider } from './contexts/CartContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContexProvaider>
        <Router />
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
      </CartContexProvaider>
    </ThemeProvider>
  )
}

export default App
