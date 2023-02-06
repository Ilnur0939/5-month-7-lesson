import { Routes, Route } from 'react-router-dom'
import Redirect from './Components/Redirect'
import Cart from './Pages/Cart'
import Details from './Pages/Details'
import Home from './Pages/Home'
import Login from './Pages/Login'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element={<Redirect />} />
    </Routes>
  )
}

export default App
