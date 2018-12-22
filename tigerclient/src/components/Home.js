import React from 'react';

import fabpix from '../components/fab.jpg'

const Home = () => {
  return (
    <div>

      <h2>Welcome to my node playground</h2><br /> 

      <img id='fabpix' src={ fabpix } alt={"Fabrice Esope"} />
     
      <p>This place is my opportunity to practice and implement some js programming, and to build whatever i can manage to put toghether.</p>

      <p id='centered'>________________________</p>

      <p>In the page 2, you will find a recollection of some of the articles i liked and archived, mostly on environment, health, diet or technology.<br />
      Feel free to add some, there is no logging required to post, i will let it this way for now, I like the idea of a free open space where everyone could post freely.<br />
      I will moderate afterward if it really needs to, to avoid spam or else, but i would rather let it open, and see how it goes first.
      </p>

      <p>If you need to reach me for any type of issue at all, or if you just want to contact me for any reason, don't hesitate to reach out to me through LinkedIn. I will be happy to answer any kind of feedback or suggestion.</p>

    </div>
      );
    }
    
    export default Home;
