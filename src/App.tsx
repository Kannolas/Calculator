import React, { useEffect } from 'react';
import Button from './components/Button';
import './App.css';
import { useAppDispatch, useAppSelector } from './Hooks/redux';
import { historyPush, updateValueWithNumber, clearValue, equalAction, clearAll, changePrefix, updateValueActionDelX, powerValue, sqrtValue, removeLastSymbol } from './Store/reducers/calculatorReducer';

function App() {
  const keyboardKeys = ['1', '2', '3', '4', '5', '6', '8', '9', '0', '.']
  const keyboardActions = ['/', '*', '-', '%', '+']
  const dispatch = useAppDispatch()
  const state = useAppSelector(state=>state.calculatorReducer)

  const onClickEqual = (text:string)=>{
    dispatch(equalAction())
  }
  const onClickAction = (text:string)=>{
    dispatch(historyPush(text))
    dispatch(clearValue())
  }
  const onUpdateValue = (text:string)=>{
    dispatch(updateValueWithNumber(text))
  }

  const onClear = (text:string)=>{
    dispatch(clearAll())
  }

  const onChangePrefix=(text:string)=>{
    dispatch(changePrefix())
  }

  const onDelX = (text:string)=>{
    dispatch(updateValueActionDelX())
  }

  const onPower = (text:string)=>{
    dispatch(powerValue())
  }

  const onSqrt = (text:string)=>{
    dispatch(sqrtValue())
  }

  const onRemoveLastSymbol = (text:string)=>{
    dispatch(removeLastSymbol())
  }

  const onKeyPressed = (e: KeyboardEvent)=>{
    e.preventDefault();
    if(keyboardKeys.includes(e.key)){
      onUpdateValue(e.key)
    }

    if(keyboardActions.includes(e.key)){
      onClickAction(e.key)
    }

    if(e.key === 'Enter' || e.key==='='){
       onClickEqual('=')
     }

    if(e.key === 'Backspace'){
      onRemoveLastSymbol(e.key)
    }
    if(e.key === 'Escape'){
      onClear(e.key)
    }
  }

  useEffect(()=>{
    window.addEventListener('keydown', onKeyPressed)
    return ()=>{ window.removeEventListener('keydown',onKeyPressed)}
  }, [])
  return (
    <div className="App">
      <div className="calculator-container">
        <div className="calculator-text">Калькулятор</div>
        <div className="calculator-display">
          <div className="display-history">{state.history}</div>
          <div className="display-main">{state.value}</div>
        </div>
        <div className="calculator-buttons-container">
          <Button text='%' callback={onClickAction}/>
          <Button text='CE' callback={onClear}/>
          <Button text='C' callback={onClear}/>
          <Button text='DELETE' callback={onRemoveLastSymbol}/>
          <Button text='1/x' callback={onDelX}/>
          <Button text='x^2' callback={onPower}/>
          <Button text='sqrt(x)' callback={onSqrt}/>
          <Button text='/' callback={onClickAction}/>
          <Button text='7' callback={onUpdateValue}/>
          <Button text='8' callback={onUpdateValue}/>
          <Button text='9' callback={onUpdateValue}/>
          <Button text='*' callback={onClickAction}/>
          <Button text='4' callback={onUpdateValue}/>
          <Button text='5' callback={onUpdateValue}/>
          <Button text='6' callback={onUpdateValue}/>
          <Button text='-' callback={onClickAction}/>
          <Button text='1' callback={onUpdateValue}/>
          <Button text='2' callback={onUpdateValue}/>
          <Button text='3' callback={onUpdateValue}/>
          <Button text='+' callback={onClickAction}/>
          <Button text='+/-' callback={onChangePrefix}/>
          <Button text='0' callback={onUpdateValue}/>
          <Button text='.' callback={onUpdateValue}/>
          <Button text='=' callback={onClickEqual}/>

        </div>
      </div>
    </div>
  );
}

export default App;
