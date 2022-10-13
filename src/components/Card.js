

import React from "react";

const Card = (props) => {
  
const {click, tstarr} = props;
 




  return (
        <div className="main">
          
           <img src={tstarr[0][0]} className={tstarr[0][1]} id={0} onClick={click} />
           <img src={tstarr[1][0]} className={tstarr[1][1]} id={1} onClick={click} />
           <img src={tstarr[2][0]} className={tstarr[2][1]} id={2} onClick={click} />
           <img src={tstarr[3][0]} className={tstarr[3][1]} id={3} onClick={click} />
           <img src={tstarr[4][0]} className={tstarr[4][1]} id={4} onClick={click} />
           <img src={tstarr[5][0]} className={tstarr[5][1]} id={5} onClick={click} />
           <img src={tstarr[6][0]} className={tstarr[6][1]} id={6} onClick={click} />
           <img src={tstarr[7][0]} className={tstarr[7][1]} id={7} onClick={click} />
           <img src={tstarr[8][0]} className={tstarr[8][1]} id={8} onClick={click} />
           <img src={tstarr[9][0]} className={tstarr[9][1]} id={9} onClick={click} />
           <img src={tstarr[10][0]} className={tstarr[10][1]} id={10} onClick={click} />
           <img src={tstarr[11][0]} className={tstarr[11][1]} id={11} onClick={click} />
        </div>
  );
};

export default Card;