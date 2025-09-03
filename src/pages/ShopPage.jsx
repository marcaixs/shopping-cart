import { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard";

function ShopPage() {
  const {products, error, loading} = useProducts;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
        <div className="products">
            {products.map((product)=>{
                return <ProductCard product={product}/>
            })}
        </div> 
    </>
  )
}

export default ShopPage
