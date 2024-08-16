import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Product from './Product/Product.jsx'
import Offer from './Offer/Offer.jsx'
import Home from './Home/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/offer' element={<Offer/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)