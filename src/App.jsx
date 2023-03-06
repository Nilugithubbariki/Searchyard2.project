import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Work from './Components/Work/Work'
import Video from './Components/Video/Video'
import Product from './Components/Product/Product'
import Carousel from './Components/Carousel/Carousel'
import Products from './Components/Products/Products'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import Footer from './Components/Footer/Footer'
import Cart from './Components/Cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
          <Header/>
          <Carousel/>
          <Work/>
          <Video/>
          <Product/>
          <Footer/>
          </>
        }/>
        <Route path='/products' element={
          <>
          <Header/>
          <Products/>
          </>
        }/>
        <Route path='/cart' element={
          <>
          <Header/>
          <Cart/>
          </>
        }/>
        <Route path='/products/:id' element={
          <>
          <Header/>
          <ProductDetails/>
          </>
        }/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
