import React, { useEffect, useState } from 'react';

const RandomColor = () => {
  const [color, setColor] = useState('#000000');
  const [typeOfColor, setTypeOfColor] = useState('Hex');

  const RandomNumber = (length) => {
    return Math.floor(Math.random() * length);
  };

  const HandleHexColor = () => {
    let Hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexcolor = '#';
    for (let i = 0; i < 6; i++) {
      hexcolor += Hex[RandomNumber(Hex.length)];
    }
    setColor(hexcolor);
  };

  const HandleRgbColor = () => {
    const r = RandomNumber(256);
    const g = RandomNumber(256);
    const b = RandomNumber(256);
    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === 'Hex') {
      HandleHexColor();
    } else {
      HandleRgbColor();
    }
  }, [typeOfColor]);

  // useEffect(() => {
  //   document.body.style.backgroundColor = color;
  // }, [color]);

  return (
    <div  className='wrapper' style={{backgroundColor:color}}>
      <div className='btn'>
        <button onClick={() => setTypeOfColor('RGB')}>RGB Color</button>
        <button onClick={() => setTypeOfColor('Hex')}>HEX Color</button>
        <button onClick={() => (typeOfColor === 'Hex' ? HandleHexColor() : HandleRgbColor())}>Generate Random Color</button>
      </div>
      <p>{typeOfColor==='RGB'?'RGB':'Hex'}</p>
      <p>{color}</p>
    </div>
  );
};

export default RandomColor;


