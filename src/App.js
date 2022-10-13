import React, { useState } from "react";
import Card from "./components/Card";
import img0 from './images/0.png';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import img5 from './images/5.png';
import img6 from './images/6.png';
import img7 from './images/7.png';
import img8 from './images/8.png';
import img9 from './images/9.png';
import img10 from './images/10.png';
import img11 from './images/11.png';
import './style.css'

const App = () => {
  const [count, setCount] = useState(0);
  const [hscore, setHscore] = useState(0);

  const [arr, setArr] = useState([[img0,'clickN'],[img1,'clickN'],[img2,'clickN'],[img3,'clickN'],[img4,'clickN'],[img5,'clickN'],[img6,'clickN'],[img7,'clickN'],[img8,'clickN'],[img9,'clickN'],[img10,'clickN'],[img11,'clickN']]);


  const incrementCount = () => {
    setCount(count + 1);
  };


  const resetCount = () => {

   
    setCount(0);
    for(let i=0; i<12;i++){
      arr[i][1]="clickN";
    }
    
    
  };

  
  const itemClick =(e) =>{
    
    if(e.target.className=="clickN"){

      console.log(e.target)
      arr[parseInt(e.target.id)][1]="clickY";
      incrementCount();
      shuffle(arr);
    }
    else if(e.target.className=="clickY"){
      if(count>hscore){
        setHscore(count);
        resetCount(); 
      }
      else{
        resetCount(); 
      }
        
        
     
      
    }
  }
  

  const shuffle =(array) => {
    
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    
    console.log(array);
    return array;
  }
 
  return (
    <div>
      <div className="header">ONE PIECE MEMORY GAME</div>
      <div className="score">
      <div>Score:{count}</div>
      <div>BEST SCORE:{hscore}</div>
      </div>
      <Card click={itemClick} tstarr={arr}/>
    </div>
  );
};

export default App;
