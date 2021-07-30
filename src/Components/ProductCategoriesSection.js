import React from "react";
import CategoryComputers from "./CategoryComputers";
import CategoryTvs from "./CategoryTvs";
import CategorySmartphones from "./CategorySmarthphones";
import CategoryGadgets from "./CategoryGadgets";
import WatchTVmodal from "./WatchTVmodal";
import WatchComputerModal from "./WatchComputerModal";
import WatchSmartModal from "./WatchSmartModal";
import WatchGadgetsModal from "./WatchGadgetsModal";

const ProductCategories = () => {
  return (
    <div className="background_section_product_categories">
      <div className="div_category_product">
        <div className="categoryProduct">
          <div className="div_img_category">
            <CategoryTvs />
          </div>
        </div>
        <WatchTVmodal/>
      </div>
      <div className="div_category_product">
        <div className="categoryProduct">
          <div className="div_img_category">
            <CategoryComputers />
          </div>
        </div>
        <WatchComputerModal/>
      </div>
      <div className="div_category_product">
        <div className="categoryProduct">
          <div className="div_img_category">
            <CategorySmartphones />
          </div>
        </div>
        <WatchSmartModal/>
      </div>
      <div className="div_category_product">
        <div className="categoryProduct">
          <div className="div_img_category">
            <CategoryGadgets />
          </div>
        </div>
        <WatchGadgetsModal/>
      </div>
      
    </div>
  );
};
export default ProductCategories;
