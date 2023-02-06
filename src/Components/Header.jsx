import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { useSelector } from "react-redux";
import Cart from '../Pages/Cart';


const Header = () => {
    const navigate = useNavigate()

    const cart = useSelector((s) => s.cart)

    function handleLogout(){
        localStorage.removeItem("token")
        toast("logged Out", {type: "info"})
        navigate("/login")
    }

  return (
    <div>
      <header className="text-bg-primary py-3 shadow sticky-top">
        <nav className="container d-flex align-items-center justify-content-between fs-4 ">
          <Link className="text-reset text-decoration-none fs-1" to="/">Najot Market</Link>
          <ul className="list-unstyled d-flex align-items-center m-0 gap-3">
            <li>
              <Link className="btn btn-primary fs-4" to="/">Home</Link>
            </li>
            <li>
              <Link className="btn btn-primary fs-4" to="/">About</Link>
            </li>
            <li>
              <Link className="btn btn-primary fs-4" to="/">Contact</Link>
            </li>
            <li>
              <Link className="btn btn-primary fs-4" to="/cart">
                <i className="fa-solid fa-shopping-cart"></i>
                <span className="badge text-bg-danger ms-2">{cart.items.length}</span>
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="btn btn-primary fs-4">Logout <i className="fa-solid fa-arrow-right-from-bracket"></i></button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header