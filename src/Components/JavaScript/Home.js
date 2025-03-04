import React from 'react';
import Homeservices from './Homeservices';
import { ChartBar } from 'lucide-react';
import RatingFome from './RatingFome';
//import RatingDisplay from './RatingDisplay';

const Home = () => {
  return (
    <div>
      <Homeservices/>
       <ChartBar/>
       <RatingFome/>
       
    </div>
  )
}

export default Home
