import React from 'react';
import Header from './Header'; 
import SlideShowStartingScreen from './ImageSliderStartingScreen';
import ProductCategories from './ProductCategoriesSection';

const StartingScreen = () => {

    return <div className="starting_screen_div">
        <div>
            <Header/>
        </div>
        <div>
            <ProductCategories/>
        </div>
       <div>
           <SlideShowStartingScreen/>
       </div>

    </div>

}
export default StartingScreen; 

