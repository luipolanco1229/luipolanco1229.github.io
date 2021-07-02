import React from "react";
import CategoryComputers from "./CategoryComputers";
import CategoryTvs from "./CategoryTvs";
import CategorySmarthphones from "./CategorySmarthphones";
import CategoryGadgets from "./CategoryGadgets";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import WatchCategories from './WatchProductCategories';

const ProductCategories = () => {
  return (

    <div className="background_section_product_categories">
     
      <div className="div_category_product">
        <div className="categoryProduct">
        <CategoryTvs />
          {/* < Router>
            <Link to="/WatchProductCategories"><CategoryTvs /></Link>
            <Route exact path="/WatchProductCategories" component={WatchCategories}/>
          </Router> */}
            
        </div>
        <h4 className="name_category_product"> &nbsp; &nbsp; Televisores</h4>
      </div>
      <div className="div_category_product">
        <div className="categoryProduct">
          <CategoryComputers />
        </div>
        <h4 className="name_category_product">Computadores</h4>
      </div>
      <div className="div_category_product">
        <div className="categoryProduct">
          <CategorySmarthphones />
        </div>
        <h4 className="name_category_product">Smarthphones</h4>
      </div>
      <div className="div_category_product">
        <div className="categoryProduct">
          <CategoryGadgets />
        </div>
        <h4 className="name_category_product">
          {" "}
          &nbsp; &nbsp; &nbsp;Accesorios
        </h4>
      </div>
      
    </div>
  );
};
export default ProductCategories;
