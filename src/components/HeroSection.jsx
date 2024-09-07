import React from 'react'
import { authenticateProduct } from '../services/Api'

export default function HeroSection() {

   const getProductsAll=()=>{
    const response= authenticateProduct()
   }
  return (
    <div>HeroSection

<button onClick={getProductsAll}>hello</button>
    </div>
  )
}
