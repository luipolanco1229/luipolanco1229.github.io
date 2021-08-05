import React from "react";
import ViewIndividualP from "./ModalViewIndividualP.js";
import { useState, useEffect } from "react";

 const WatchComputerProducts = (props) => {
    const [product, setProduct] = useState([]);

      const computer = async => {
        
            fetch("http://localhost/Technova/computer_category.php", {      
                method: "GET",
                headers: {
                    'Accept': 'application/json'
                },
                })
                .then(response => response.json())
                .then((product) => {
                  
                       
                    setProduct(product);
                        
                });                
            
            }    
        
        

    useEffect(() => {
        computer();
      }, []);
    
      
 
        
      
  return (
    <div className="sectionBackground">
      <div className="sectionHeader">
        <p className="sectionTitle"> {props.titleName}</p>
      </div>

    {
        product?.map((pro) => ( 
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
                <div className="productName" name="productName">{pro.nombre}</div>
                <div className="productPrice" name="productPrice">{pro.precio}</div>
                <div className="aditionalDetails" name="productBrand">{pro.marca}</div>
              </div>
                    <ViewIndividualP id={pro.id}/>
                  
            </div>
          </div>
         </div>
        </div>)
        )
    }
     
      <div className="moreProducts">Next =&gt;</div>
    </div>
  );
};

export default WatchComputerProducts;