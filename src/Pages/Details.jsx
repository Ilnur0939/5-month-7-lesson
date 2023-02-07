import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../Components/Header';
import useProducts from '../Hooks/useProducts';
const Details = () => {
  const {id} = useParams()
  const [products] = useProducts()
  console.log(products);
  let productItem = products.find(item => item.id === +id)
  return (
    <>
      <Header />
      {/* <section className='text-bg-light'>
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h1>Your Cart</h1>
            </div>
            <ul className="list-group my-3">
                <li className="list-group-item row d-flex align-items-center">
                  <div className='col-4'>
                    <img className='img-fluid' src={products[0].image} alt={products[0].title} />
                  </div>
                  <div className="col-md-6">
                    <h2>{products[0].title}</h2>
                    <p className='fs-5'>{products[0].description}</p>
                    <p className='fs-4'>${products[0].price}</p>
                  </div>
                </li>
            </ul>
            
            <div className="d-flex justify-content-between">
              <Link to={"/"} className="btn btn-outline-success"><i className="fa-solid fa-arrow-left"></i> Back to Shopping</Link>
              <button className="btn btn-success">Proceed to payment <i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </section> */}
    </>
  )
}

export default Details