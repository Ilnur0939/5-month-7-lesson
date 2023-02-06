import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";


const CartList = () => {
  const { items } = useSelector((s) => s.cart);
  const dispatch = useDispatch();

  function handleIncItem(id){
    dispatch({type: "INC_ITEM_COUNT", payload: id})
  }

  function handleDecItem(id){
    dispatch({type: "DEC_ITEM_COUNT", payload: id})
  }

  function handleRemoveItem(id){
    dispatch({type: "REMOVE_FORM_CART", payload: id})
  }

  return (
    <section className='text-bg-light'>
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h1>Your Cart</h1>
              <span className='fs-4'>Total: ${items.reduce((a,b) => a +b.product.price * b .count, 0).toFixed(2)}</span>
            </div>

            {items.length === 0 && <h2 className='text-center'>Cart is empty</h2>}

            <ul className="list-group my-3">
              {items.map((item, index) => (
                <li key={index} className="list-group-item row d-flex align-items-center">
                  <div className='col-1'>
                    <img className='img-fluid' src={item.product.image} alt={item.product.title} />
                  </div>
                  <div className="col-md-7">
                    <h2>{item.product.title}</h2>
                    <p>{item.product.description}</p>
                  </div>
                  <div className="col-md-1">
                    <p>${item.product.price}</p>
                  </div>
                  <div className="col-md-1 d-flex justify-content-between align-items-center">
                    <button disabled={item.count === 1} onClick={() => handleDecItem(item.product.id)} className="btn btn-secondary">-</button>
                    <span>{item.count}</span>
                    <button onClick={() => handleIncItem(item.product.id)} className="btn btn-secondary">+</button>
                  </div>
                  <div className="col-md-1">
                    <p>{(item.count * item.product.price).toFixed(2)}</p>
                  </div>
                  <div className="col-md-1">
                    <button onClick={() => handleRemoveItem(item.product.id)} disabled={item.length === 0} className="btn btn-danger">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="d-flex justify-content-between">
              <Link to={"/"} className="btn btn-outline-success"><i className="fa-solid fa-arrow-left"></i> Back to Shopping</Link>
              <button className="btn btn-success">Proceed to payment <i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </section>
  )
}

export default CartList