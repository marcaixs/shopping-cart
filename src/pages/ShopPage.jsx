import { useState, useEffect } from "react"
import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
import useProducts from "../components/useProducts";
import '../styles/ShopPage.css'

function ShopPage({cart, setCart}) {
  const { products, error, loading } = useProducts();
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
        <Link to='/cart'><button>Checkout</button></Link>
        <p>Cart: {cart.length}</p>
        <div className="products">
            {products.map((product)=>{
                return <ProductCard product={product} cart={cart} setCart={setCart}/>
            })}
        </div> 
    </>
  )
}

export default ShopPage
