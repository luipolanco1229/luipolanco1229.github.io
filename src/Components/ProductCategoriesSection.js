import React from "react";
import CategoryComputers from "./CategoryComputers";
import CategoryTvs from "./CategoryTvs";
import CategorySmarthphones from "./CategorySmarthphones";
import CategoryGadgets from "./CategoryGadgets";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WatchCategories from "./WatchProductCategories";

const ProductCategories = () => {
  return (
    <div className="background_section_product_categories">
      <Router>
        <div className="div_category_product">
          <div className="categoryProduct">
            <Link to="/WatchProductCategories">
              <CategoryTvs />
            </Link>
          </div>
          <h4 className="name_category_product"> &nbsp; &nbsp; Televisores</h4>
        </div>
        <div className="div_category_product" >
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
            &nbsp; &nbsp; &nbsp;Accesorios </h4>
        </div>
        <Switch>
          <Route
            exact
            path="/WatchProductCategories"
            component={WatchCategories}
          />
          {/* <Route exact path="/info" component={Info}/>
            <Route exact path="/contacto" component={Contacto}/> */}
        </Switch>
      </Router>
    </div>
  );
};
export default ProductCategories;
