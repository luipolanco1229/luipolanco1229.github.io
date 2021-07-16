import React from "react";
import CategoryComputers from "./CategoryComputers";
import CategoryTvs from "./CategoryTvs";
import CategorySmarthphones from "./CategorySmarthphones";
import CategoryGadgets from "./CategoryGadgets";
import WatchProductCategories from "./WatchProductCategories";

const ProductCategories = () => {
  return (
    <div className="background_section_product_categories">
      <div className="div_category_product">
        <div className="categoryProduct">
          <div className="div_img_category">
            <CategoryTvs />
          </div>
        </div>
        <WatchProductCategories/>
      </div>
      <div className="div_category_product">
        <div className="categoryProduct">
          <div className="div_img_category">
            <CategoryComputers />
          </div>
        </div>
        <div className="div_text_category">
          <h4 className="name_category_product">Computadores</h4>
        </div>
      </div>
      <div className="div_category_product">
        <div className="categoryProduct">
          <div className="div_img_category">
            <CategorySmarthphones />
          </div>
        </div>
        <div className="div_text_category">
          <h4 className="name_category_product">Smarthphones</h4>
        </div>
      </div>
      <div className="div_category_product">
        <div className="categoryProduct">
          <div className="div_img_category">
            <CategoryGadgets />
          </div>
        </div>
        <div className="div_text_category">
          <h4 className="name_category_product">Accesorios</h4>
        </div>
      </div>
      {/* <Router>
        <Link to="Products.js">s</Link>
      </Router>

      <Switch>
        <Route path="Products.js" component={Products} />
      </Switch> */}
    </div>
  );
};
export default ProductCategories;
