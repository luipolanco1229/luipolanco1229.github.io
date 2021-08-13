import React from "react";
// import { ProductComponent } from "./ProductComponent";

export const ProductsComponent = ({ products, title }) => {
  return (
    <div className="sectionBackground">
      <div className="sectionHeader">
        <p className="sectionTitle">{title}</p>
      </div>

      <div className="productContainerFlex">
        <div className="productContainerDiv">
          <div className="cardIndividualProductTop">
            <p>Nombre del producto</p>
          </div>
          <div className="cardIndividualProductBottom">
            <div className="cardIndividualProductLeft">
              <p>
                <img
                  src="https://image.flaticon.com/icons/png/512/1554/1554561.png"
                  alt="package"
                ></img>
              </p>
            </div>
            <div className="cardIndividualProductRight">
              <div className="cardIndividualRightFlex">
                <div className="cardPrice">Precio: $10000</div>
                <div className="cardBrand">Marca</div>
              </div>
              <div ClassName="cardMoreDetails">
                <div className="cardMoreDetailsCenter"> Ver más detalles</div>
              </div>
            </div>
          </div>
        </div>

        <div className="productContainerDiv">
          <div className="cardIndividualProductTop">
            <p>Nombre del producto</p>
          </div>
          <div className="cardIndividualProductBottom">
            <div className="cardIndividualProductLeft">
              <p>
                <img
                  src="https://image.flaticon.com/icons/png/512/1554/1554561.png"
                  alt="package"
                ></img>
              </p>
            </div>
            <div className="cardIndividualProductRight">
              <div className="cardIndividualRightFlex">
                <div className="cardPrice">Precio: $10000</div>
                <div className="cardBrand">Marca</div>
              </div>
              <div ClassName="cardMoreDetails">
                <div className="cardMoreDetailsCenter"> Ver más detalles</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {!products ? (
        <i className="fas fa-sync fa-10x fa-spin"></i>
      ) : (
        products?.map((product) => (
          <ProductComponent product={product} key={product?.id} />
        ))
      )} */}
      <div className="moreProducts">Next =&gt;</div>
    </div>
    // <div className="individualProductBackground">
    //   <div className="individualProductHeader">
    //     <div className="individualProductTitle">Nombre del producto</div>
    //   </div>
    //   <div className="individualProductCenter">
    //     <div className="individualProductImg">
    //       <center>
    //         <img
    //           src="https://image.flaticon.com/icons/png/512/1554/1554561.png"
    //           alt="package"
    //         ></img>
    //       </center>
    //     </div>
    //     <div className="individualProductFeactures">
    //       <div className="individualProductFeacturesTitle">Características</div>
    //       <div className="individualProductFeacturesTable">
    //         Marca: Lorem
    //         <hr></hr>
    //         Precio: $$$$$
    //         <hr></hr>
    //         Caracteristica 3: Lorem
    //         <hr></hr>
    //         Caracteristica 4: Lorem
    //         <hr></hr>
    //         Caracteristica 5: Lorem
    //         <hr></hr>
    //         Caracteristica 6: Lorem
    //         <hr></hr>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="individualProductShop">
    //     <div className="individualProductBuy"><p>Comprar</p></div>
    //     <div className="individualProductCar"><p>Añadir al carrito</p></div>
    //   </div>
    // </div>
  );
};
