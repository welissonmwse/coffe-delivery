import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { CartContexProvaider } from './contexts/CartContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContexProvaider>
        <Header />
        <Router />
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
      </CartContexProvaider>
    </ThemeProvider>
  )
}

export default App
