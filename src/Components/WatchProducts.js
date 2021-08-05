import React from "react";
import ViewIndividualP from "./ModalViewIndividualP.js";

const WatchTVproducts = (props) => {
  return (
    <div className="sectionBackground">
      <div className="sectionHeader">
        <p className="sectionTitle"> {props.titleName}</p>
      </div>

     <div className="productContainer">
        <div className="ProductItem">
          <div className="productCard">
          <div className="productCardLeft">
              <div className="imgGrid">
                <img src="https://definicion.de/wp-content/uploads/2009/06/producto.png" alt="Producto"></img>
              </div>
            </div>
            <div className="productCardRight">
              <div clasName="productHeader">
                <div className="productName" name="productName">Nombre del producto</div>
                <div className="productPrice" name="productPrice">Marca:</div>
                <div className="aditionalDetails" name="product">169900</div>
              </div>
                    <ViewIndividualP />
                  
            </div>
          </div>
         </div>
        </div>
     
      <div className="moreProducts">Next =&gt;</div>
    </div>
  );
};

export default WatchTVproducts;
