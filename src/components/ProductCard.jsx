import { useState, useEffect } from "react"

function ProductCard({product, cart, setCart}){
    const [quantity, setQuantity] = useState(product.quantity);

    useEffect(() => {
        if(quantity < 0){
            setQuantity(0)
            return
        }

        product.quantity = quantity;

        const index = cart.findIndex(item => item.id === product.id)

        if(quantity == 0){
            if (index > -1){
                const filtered = cart.filter(function(item) { return item.id != product.id; });
                setCart([...filtered])
                return
            } else {
                return
            }
        }
        
        if(index > -1){
            const updatedCart = cart.map(item =>
            item.id === product.id ? { ...item, quantity } : item
            );
            setCart(updatedCart);
           
        } else {
            setCart([...cart, {...product, quantity}]);
        };
          
    }, [quantity])
        
    console.log(cart)
    return(
        <div className="product-card">
            <p>{product.title}</p>
            <img src={product.image} alt={product.title} />
            <div className="button-box">
                <button onClick={()=>{
                    setQuantity(quantity - 1)
                    
                }}>-</button>
                <p>{quantity}</p>
                <button onClick={()=>{
                    setQuantity(quantity + 1)
                    
                }}>+</button>
            </div>
        </div>
    )
}

export default ProductCard