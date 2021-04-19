import React from 'react';
import { Textfit } from 'react-textfit';

import {useSelector } from "react-redux";
import * as fromCalculator from "./../redux/store";

const Screen=() => {
    
    const expression=useSelector((state)=>{
    return fromCalculator.getExpression(state)
  })
    const total=useSelector((state)=>{
      return fromCalculator.getTotal(state)
    })

return (
    <div className="screen--container">
      <Textfit
        max={40}
        throttle={60}
        mode="single"
        className="screen-top"
      >
        { expression }
      </Textfit>
      <Textfit
        max={150}
        mode="single"
        className="screen-bottom"
      >
        { total }
      </Textfit>
    </div>
  )
}
export default Screen;