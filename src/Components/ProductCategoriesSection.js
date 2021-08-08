import React from "react";
import CategoryComputers from "./CategoryComputers";
import CategoryTvs from "./CategoryTvs";
import CategorySmartphones from "./CategorySmartphones";
import CategoryGadgets from "./CategoryGadgets";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  return (
    <div className="background_section_product_categories">
     
      <Link className='link link--text-center' to='/tvs'>
        <div className="div_category_product">
          <div className="categoryProduct">
            <div className="div_img_category">
            <CategoryTvs />
            </div>
          </div>
          <div >
            <h4> Televisores</h4>
          </div>
        </div>
      </Link>
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
      <Link className='link link--text-center' to='/smartphones'>
        <div className="div_category_product">
          <div className="categoryProduct">
            <div className="div_img_category">
              <CategorySmartphones />
            </div>
          </div>
          <div >
            <h4> Smartphones</h4>
          </div>
        </div>
      </Link>
      <Link className='link link--text-center' to='/smartphones'>
        <div className="div_category_product">
          <div className="categoryProduct">
            <div className="div_img_category">
            <CategoryGadgets />
            </div>
          </div>
          <div >
            <h4> Gadgets</h4>
          </div>
        </div>
      </Link>
      
    </div>
  );
};
export default ProductCategories;
