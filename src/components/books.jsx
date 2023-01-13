import React from 'react'
import './stylus/bookStyle.css'
const ele=document.querySelector('div');
console.log(ele);
let currentX=0;
let currentY=0;
ele.addEventListener('mousemove',(e)=>{
  
  currentX=e.offsetX;
  currentY=e.offsetY;
  
  ele.style.setProperty("--positionx",`${currentX}px`);
  ele.style.setProperty("--positiony",`${currentY}px`);

})
// window.addEventListener('scroll',(e)=>{
//   currentY+=window.scrollY;
//   console.log(currentY);
//   console.log(window.offsetX);
//   ele.style.setProperty("--positionx",`${currentX}px`);
//   ele.style.setProperty("--positiony",`${currentY}px`);
  
  
// })
function Books() {
    return (
      <div className="bookcase_style">
        
      </div>
    );
  }
  
  export default Books;