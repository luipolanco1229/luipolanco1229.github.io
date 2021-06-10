import React from 'react';
import { Slide } from 'react-slideshow-image';
import developer from '../Images/developer.jpg'
import people_and_phones from '../Images/people_and_phones.jpg'
import people_watching_tv from '../Images/people_watching_tv.jpg'

import SimpleImageSlider from "react-simple-image-slider";

const images = [
  developer, people_watching_tv, people_and_phones];

const SlideShowStartingScreen = () => {
  return (
    <div>
      <SimpleImageSlider
        width={150}
        height={150}
        images={images}
      />
    </div>
  );
}

export default SlideShowStartingScreen;