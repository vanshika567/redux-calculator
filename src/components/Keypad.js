import React from "react";
import { keypadKeys } from "../utils/constants";
import Calculator from "./Calculator";
export default function Keypad (props) {
 const handleClick = key => {
    switch (key) {
      case "c":
        props.clear();
        break;
      case "Del":
        props.delete();
        break;
      case "=":
        props.evaluate();
        break;
      default:
        props.calculate(key);
        break;
    }
  };
  
    return (
      <div className="keypad">
        {keypadKeys.map((block, index) => {
          return (
            <div key={index} className="block">
              {block.map(key => (
                <Calculator.Button
                  key={key}
                  onButtonClick={handleClick}
                  buttonKey={key}
                />
              ))}
            </div>
          );
        })}
      </div>
    );
  }

