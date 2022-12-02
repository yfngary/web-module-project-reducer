import React from 'react';
import { useReducer } from 'react';
import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer, { initialState } from '../reducers';

import { applyNumber, changeOperation, clearDisplay, memoryAdd, memoryApply, memoryClear } from '../actions';



function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleNumberClicks = (number) => {
    dispatch(applyNumber(number))
  }

  const handleOperationClick = (operator) => {
    dispatch(changeOperation(operator));
  }

  const handleClickClearDisplay = () => {
    dispatch(clearDisplay());
  }

  const handleMemoryAddClick = () => {
    dispatch(memoryAdd());
  }

  const handleMemoryApplyClick = () => {
    dispatch(memoryApply())
  }

  const handleMemoryClear = () => {
    dispatch(memoryClear())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemoryAddClick}/>
              <CalcButton value={"MR"} onClick={handleMemoryApplyClick}/>
              <CalcButton value={"MC"} onClick={handleMemoryClear}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleNumberClicks(1)}/>
              <CalcButton value={2} onClick={() => handleNumberClicks(2)}/>
              <CalcButton value={3} onClick={() => handleNumberClicks(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleNumberClicks(4)}/>
              <CalcButton value={5} onClick={() => handleNumberClicks(5)}/>
              <CalcButton value={6} onClick={() => handleNumberClicks(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleNumberClicks(7)}/>
              <CalcButton value={8} onClick={() => handleNumberClicks(8)}/>
              <CalcButton value={9} onClick={() => handleNumberClicks(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperationClick('+')}/>
              <CalcButton value={"*"} onClick={() => handleOperationClick('*')}/>
              <CalcButton value={"-"} onClick={() => handleOperationClick('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClickClearDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
