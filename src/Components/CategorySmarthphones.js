import React, {Fragment} from "react";
import Smarthphones from "../Icons/llamada-de-telefono-inteligente.png";

const CategorySmarthphones = () => {
  return (
    <Fragment>
        <div className="icon_product_div">
          <img
            src={Smarthphones}
            className="icon_product"
            alt="icon_product"
          ></img>
        </div>
    </Fragment>
  );
};
export default CategorySmarthphones;
