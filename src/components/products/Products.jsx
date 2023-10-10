import React from 'react'
import './Product.css'
import {GrStarOutline} from "react-icons/gr";

const Products = ({title, image, rating, price}) => {
  return (
    <>
    <div className="Products">
        <img src={image} alt="img" />
        <div className="ProductInformation">
            <p>{title}</p>
            <div className="ProductsGroup">
                <p className="productPrice">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                {/* Rating */}
                <div className="ProductRating">
                    <GrStarOutline/>
                    <GrStarOutline/>
                    <GrStarOutline/>
                </div>
            </div>
        </div>
        <button>Add To Cart</button>
    </div>
  
    </>
  )
}

export default Products

// https://m.media-amazon.com/images/I/41dEcQR7UnL._AC_SY400_.jpg
