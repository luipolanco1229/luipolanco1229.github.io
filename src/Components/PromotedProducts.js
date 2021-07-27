import React from 'react';
import promotedProduct1 from '../Images/1.png'
import promotedProduct2 from '../Images/2.png'

const PromotedProducts = () => {
    return <div className="div_promoted_products">
        <div className="subdivision_one_promoted_products">
            <div>
               <img src={promotedProduct1} className="img_promoted_products"></img>
            </div>
            <div>
            <h4>2</h4>
            </div>
            <div>
            <h4>3</h4>
            </div>
        </div>
        <div className="subdivision_two_promoted_products">
            <div>
            {/* <img src={promotedProduct2} className="img_promoted_products4"></img> */}
            </div>
            <div>
            <h4>5</h4>
            </div>
            <div>
            <h4>6</h4>
            </div>
        </div>
    </div>
}
export default PromotedProducts; 