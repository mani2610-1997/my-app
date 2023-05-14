import React, { useState, useEffect, useRef } from 'react';

function ColorChangingText({ text }) {
  const words = text.split(' ');
  const wordRefs = useRef([]);
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const [newIndex, setIndex] = useState(-1);
 
  const handleScrollPositive = () => {

    if (newIndex <= words.length) {
      setIndex((newIndex+1));
      setVisibleIndex(newIndex);
    }
  };

  const handleScrollNegative = () => {
    
    if (newIndex >= 0) {
      setIndex((newIndex-1));
      setVisibleIndex(newIndex);
    }
  };

  let handleScroll = (y) => {
    console.log(visibleIndex);
    y>0?handleScrollPositive():handleScrollNegative();
  };

  return (
    <>
  <div style={{ backgroundColor: 'black' }}>
    
    
    </div>
    <div onWheel={(e)=>handleScroll(e.deltaY)} style={{  height:'550px',width:"900px", backgroundColor: 'black', fontSize: 52, fontWeight: 'bold', padding: '180px 180px 80px 180px'}}>
      {words.map((word, index) => (
        <span key={index} ref={(ref) => (wordRefs.current[index] = ref)} style={{ color: index < visibleIndex ? 'white' : '#202020' }}>
          {word}{' '}
        </span>
      ))}
    </div>
    
 
    </>
  );
}

export default ColorChangingText;