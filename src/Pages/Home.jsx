import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"

//Components
import Header from "../Components/Header"
import Products from "../Components/Products"

const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    let token = localStorage.getItem("token")
    if(!token){
      navigate("/login")
    }
  }, [])

  return (
    <>
      <Header />
      <Products />
    </>
  )
}

export default Home