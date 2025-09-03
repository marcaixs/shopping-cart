import { useState } from "react"

function ProductCard({product}){

    return(
        <div className="product-card">
            <p>{product.title}</p>
            <img src={product.image} alt={product.title} />
        </div>
    )
}

export default ProductCard