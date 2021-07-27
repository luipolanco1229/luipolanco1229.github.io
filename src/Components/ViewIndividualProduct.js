import React from "react";

const viewProduct = () => {
  return (
    <div className="viewProductBackground">
      <div className="sectionBorder">
        <div className="viewProductHeader">
          <div className="viewName">
            <span>Televisor LG 45"</span>
          </div>
          <div className="viewPrice">
            <span>1699900 COP</span>
          </div>
        </div>

        <div className="viewProductImg">
          <div className="viewContainerImg">
            <center className="centerImg">
              <img
                src="https://hogarymoda.com.co/wp-content/uploads/2020/09/CX50S1USM_1.png"
                alt="img_product"
              ></img>
            </center>
          </div>
        </div>

        <div className="viewProductBottom">
          <div className="viewFeactures">
            <div className="titleFeactures">
              <span>Características </span>
            </div>
            <div className="longFeactures">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                odit ipsam vero labore voluptate minima illo nihil impedit
                aperiam voluptatibus hic, iure quasi quaerat. Totam laudantium
                harum dolores at, ratione vero commodi fuga placeat, iusto eos
                iure sit. Quos veniam sapiente repellendus excepturi eligendi.
                Quaerat officiis quidem a doloribus ex?
              </p>
              <div className="moreFeactures">
                <ul className="menuFeactures">
                  <li>
                    <p className="moreFeacturesText">Ver más ▼</p>
                     <ul>
                       <li>
                         <center>
                      <table className="feacturesTable">
                        <tr>
                          <td>Nombre</td> <td>A</td> 
                        </tr>
                        <tr>
                          <td>Marca</td> <td>B</td> 
                        </tr>
                        <tr>
                          <td>Tamaño</td> <td>C</td> 
                        </tr>
                        <tr>
                          <td>Modelo</td> <td>D</td> 
                        </tr>
                        <tr>
                          <td>SmartTV</td> <td>E</td> 
                        </tr>
                        <tr>
                          <td>Precio</td> <td>F</td> 
                        </tr>
                      </table>
                    </center>
                       </li>
                     </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="viewDivBuy">
            <div className="buyProduct">
              <div>Comprar</div>
            </div>
            <div className="addToCar">
              <div>Añadir al carrito</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default viewProduct;
