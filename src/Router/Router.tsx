import { Route, Routes } from 'react-router'
import Home from '../page/Home'
import ProductDetails from '../page/ProductDetails'
import Layout from './Layout'
import Cart from '../page/Cart'

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  )
}

export default Router