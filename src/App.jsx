import React from 'react'
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { plus, minus } from "./actions/actions"

const App = () => {
  const newState = useSelector((state) => state.changeTheState);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">

        <h1>Counter</h1>
        <h4>Using React and Redux</h4>

        <div className="quantity">

          <button className="quantity__minus" title="Decrement" onClick={() => dispatch(minus())}> <span> - </span></button>

          <input type="text" className="quantity__input" value={newState} name="quantity" />

          <button className="quantity__minus" title="Decrement" onClick={() => dispatch(plus())}> <span> + </span></button>

        </div>
        
      </div>
    </>
  )
}

export default App

