import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList  from "./components/ProductList";

function App() {
  return (
    <>
      <title>Products</title>
      <ProductList />
    </>
  )
}

export default App