import React from "react";
import { Link } from "react-router-dom";

export const ProductComponent = ({ product }) => {
    return (
        <div className="productContainer">
            <div className="ProductItem">
                <div className="productCard">
                    <div className="productCardLeft">
                        <div className="imgGrid">
                            <img src={product.img} alt="Producto"></img>
                        </div>
                    </div>
                    <div className="productCardRight">
                        <div clasName="productHeader">
                            <div className="productName" name="productName">{product.nombre}</div>
                            <div className="productPrice" name="productPrice">{product.precio}</div>
                            <div className="aditionalDetails" name="productBrand">{product.marca}</div>
                        </div>
                        <Link to={`/product/${product.id_computer}`}>
                            Ver más detalles
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    ); 
}