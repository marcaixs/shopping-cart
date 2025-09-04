import { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard";
import useProducts from "../components/useProducts";

function ShopPage() {
  const {products, error, loading} = useProducts();
  const [cart, setCart] = useState([])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
        <div className="products">
            {products.map((product)=>{
                return <ProductCard product={product} cart={cart} setCart={setCart}/>
            })}
        </div> 
    </>
  )
}

export default ShopPage
