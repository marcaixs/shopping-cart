import { useState, useEffect } from "react"
import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
import useProducts from "../components/useProducts";
import '../styles/ShopPage.css'

function ShopPage({cart, setCart}) {
  const { products, error, loading } = useProducts();
  const cartItems = cart.reduce((sum, product) => sum + product.quantity, 0)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className="shop-container">
      <div className="cart-button">
        <Link to='/cart'><button>Checkout</button></Link>
        <p>Cart: {cartItems}</p>
      </div>
        
        <div className="products">
            {products.map((product)=>{
                return <ProductCard 
                  key={product.id}
                  product={product}
                  cart={cart}
                  setCart={setCart}/>
              })
            }
        </div> 
    </div>
  )
}

export default ShopPage
