import React from "react";
import CategoryComputers from "./CategoryComputers";
import CategoryTvs from "./CategoryTvs";
import CategorySmartphones from "./CategorySmarthphones";
import CategoryGadgets from "./CategoryGadgets";
import WatchTVmodal from "./WatchTVmodal";
import WatchSmartModal from "./WatchSmartModal";
import WatchGadgetsModal from "./WatchGadgetsModal";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  return (
    <div className="background_section_product_categories">
     <div className="containerCategory">
      <div className="div_category_product">
        <div className="categoryProduct">
          <div className="div_img_category">
            <CategoryTvs />
          </div>
        </div>
        {/* <WatchTVmodal /> */}
        <div className="categoryh4">
            <h4>Televisores</h4>
        </div>
      </div>
        <div className="div_category_product">
          <Link className='link link--text-center' to='/computers'>
          <div className="categoryProduct">
            <div className="div_img_category">
              <CategoryComputers />
            </div>
          </div>
          <div className="categoryh4">
            <h4>Computadores</h4>
          </div>
         </Link>
        </div>
     
      <div className="div_category_product">
        <div className="categoryProduct">
          <div className="div_img_category">
            <CategorySmartphones />
          </div>
        </div>
        {/* <WatchSmartModal /> */}
        <div className="categoryh4">
            <h4>Celulares</h4>
        </div>
      </div>
      <div className="div_category_product">
        <div className="categoryProduct">
          <div className="div_img_category">
            <CategoryGadgets />
          </div>
        </div>
        {/* <WatchGadgetsModal /> */}
        <div className="categoryh4">
            <h4>Gadgets</h4>
        </div>
      </div>
    </div>
   </div>
  );
};
export default ProductCategories;
