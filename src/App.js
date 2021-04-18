import React from "react";
import {useDispatch} from "react-redux";
import {
  calculate,
  deleteLastEntry,
  clear,
  evaluateExpression
} from "./redux/actions/actions";
import Calculator from "./components/Calculator";
import "./App.css";

export function App(props) {
  
 const dispatch=useDispatch()
 const clearscreen= () => {
  dispatch(clear());
}
const evaluate= () => {
  dispatch(evaluateExpression());
}
const deleteexpr=() => {
  dispatch(deleteLastEntry());
}
const calculation =(buttonKey)=> {
      dispatch(calculate(buttonKey));
    }
    return (
      <div className="calculator--container">
        <Calculator.Screen {...props}/>
        <Calculator.Keypad {...props} clear={clearscreen} evaluate={evaluate} delete={deleteexpr} calculate={calculation}/>
      </div>
    );
  }
  
export default App;