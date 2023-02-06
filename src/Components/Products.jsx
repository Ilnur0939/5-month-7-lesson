import React from 'react'
import useProducts from '../Hooks/useProducts';
import PlaceholderCards from './PlaceholderCards';
import ProductsCards from './ProductsCards';

const Products = () => {
    const [products, loading] = useProducts()
  return (
    <div className="container">
      {loading ? <PlaceholderCards /> : <ProductsCards products={products}/>}
    </div>
  )
}

export default Products