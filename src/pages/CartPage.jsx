import ProductCard from "../components/ProductCard"
import '../styles/CartPage.css'

function CartPage({cart, setCart}) {
  const cartItems = cart.reduce((sum, product) => sum + product.price, 0)
  
  return (
    <div className="cart">
      <div className="cart-products">
       {cart.length > 0 ? (
        cart.map((product) => (
          <ProductCard
          key={product.id}
          product={product}
          cart={cart}
          setCart={setCart}
       />
      ))
    ) : (
    <p>The kart is empty</p>
  )}
        
  </div>
    <div className="checkout">
      <p>Total: {cartItems}</p>
      <button>Checkout</button>
    </div>      
  </div> 
  )
}

export default CartPage
