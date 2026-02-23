
import { BrowserRouter } from 'react-router'
import './App.css'
import Router from './Router/Router'
import { CartProvider } from './context/CartContext'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Router />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
