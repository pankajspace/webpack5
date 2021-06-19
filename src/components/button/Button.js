import React, { useState } from 'react';

import "./button.scss";

export default function ButtonHW() {

  const [count, setCount] = useState([]);

  const handleClick = () => {
    setCount([...count, 0]);
  }

  const renderText = () => {
    return count.map((text, index) => {
      return <p key={index} className="text">Hello World</p>
    })
  }

  return (
    <>
      <button className="button" onClick={handleClick} >Hello Wrold!</button>
      {renderText()}
    </>
  )

}
