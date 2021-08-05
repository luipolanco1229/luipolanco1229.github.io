import React from 'react';
import promotedProduct1 from '../images/1.png'
import promotedProduct2 from '../images/2.png'

const PromotedProducts = () => {
    return <div className="div_promoted_products">
        <div className="subdivision_one_promoted_products">
            <div>
               <img src={promotedProduct1} className="img_promoted_products"></img>
            </div>
            <div>
            <img src={promotedProduct1} className="img_promoted_products"></img>  
            </div>
            <div>
            <img src={promotedProduct1} className="img_promoted_products"></img> 
            </div>
        </div>
        <div className="subdivision_two_promoted_products">
            <div>
            <img src={promotedProduct1} className="img_promoted_products"></img> 
            </div>
            <div>
            <img src="https://dbibyhavas.io/es/wp-content/uploads/sites/5/2019/07/algoritmos.png" className="img_promoted_products"></img>
            </div>
            <div>
            <img src={promotedProduct1} className="img_promoted_products"></img> 
            </div>
        </div>
    </div>
}
export default PromotedProducts; 