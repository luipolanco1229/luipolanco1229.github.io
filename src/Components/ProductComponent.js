import React from "react";
import { Link, useLocation } from "react-router-dom";

export const ProductComponent = ({ product }) => {
    const pathName = useLocation().pathname.slice(1);
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
                        <Link to={`/product/${product.id}/${pathName}`}>
                            Ver más detalles
                        </Link>
                    </div>
                </div> 
            </div>
            {/* <div className="productContainerDiv">
                <div className="productSectionLeft">Lorem</div>
                <div className="productSectionRight">Lorem</div>
            </div> */}
        </div>
    ); 
}