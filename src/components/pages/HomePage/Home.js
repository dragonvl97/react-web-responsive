import React from 'react';
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from './Data';

function Home() {
  return (
    <div>
      <HeroSection {...homeObjOne} />
      <Pricing />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
    </div>
  );
}

export default Home;
