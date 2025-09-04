import ProductCard from "../components/ProductCard"
import '../styles/CartPage.css'

function CartPage({cart, setCart}) {
  
  return (
    <div className="cart">
            {cart.map((product)=>{
                return <ProductCard product={product} cart={cart} setCart={setCart}/>
            })}
    </div> 
  )
}

export default CartPage
