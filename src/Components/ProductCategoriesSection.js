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
      <div className="div_category_product">
        <div className="categoryProduct">
          <div className="div_img_category">
            <CategoryTvs />
          </div>
        </div>
        <WatchTVmodal />
      </div>
      <Link className='link link--text-center' to='/computers'>
        <div className="div_category_product">
          <div className="categoryProduct">
            <div className="div_img_category">
              <CategoryComputers />
            </div>
          </div>
          <div >
            <h4> Computadores</h4>
          </div>
        </div>
      </Link>
      <div className="div_category_product">
        <div className="categoryProduct">
          <div className="div_img_category">
            <CategorySmartphones />
          </div>
        </div>
        <WatchSmartModal />
      </div>
      <div className="div_category_product">
        <div className="categoryProduct">
          <div className="div_img_category">
            <CategoryGadgets />
          </div>
        </div>
        <WatchGadgetsModal />
      </div>

    </div>
  );
};
export default ProductCategories;
