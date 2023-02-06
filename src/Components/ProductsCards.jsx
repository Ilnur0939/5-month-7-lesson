import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";

const ProductsCards = ({products}) => {
    const dispatch = useDispatch();

    function handleAddToCart(product){
        dispatch({type: "ADD_TO_CART", payload: product})
    }


    return (
        <div className='row'>
            {products.map((product) => (
                <div key={product.id} className="col-md-6 col-lg-3">
                    <div className="card overflow-hidden" aria-hidden="true">
                    <img  className='card-image-top placeholder-card-image' src={product.image} alt={product.title} />
                    <div className="card-body">
                        <h5 className="card-title text-truncate">
                            {product.title}
                        </h5>   
                        <p className="card-text placeholder-glow">
                            <span className="d-flex justify-content-between align-items-center">
                                <span className='text-danger'>${product.price}</span>
                                <span><i className='fa-solid fa-star text-warning'></i> {product.rating.rate} / {product.rating.count}</span>
                            </span>
                            <span  className='product-description py-3'>{product.description}</span>
                        </p>
                        <div className="d-flex justify-content-between">
                            <Link to={`/details/${product.id}`} className="btn btn-primary col-5 d-block p-1">Read More</Link>
                            <button onClick={() => handleAddToCart(product)} className="btn btn-success col-5 p-1 d-block">Add to cart</button>
                        </div>
                    </div>

                </div>
                </div>
            ))}
        </div>
      )
}

export default ProductsCards