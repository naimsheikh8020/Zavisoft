import { Route, Routes } from 'react-router'
import Home from '../page/Home'
import Layout from './Layout'

const Router = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
    </Routes>
  )
}

export default Router