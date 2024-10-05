import React from 'react'
import Button from './Button'
const NumberPad = ({displayVal , setDisplayVal}) => {
    const buttons = ["1","2","3","4","5","6","7","8","9","0","."];
    const expression = ["+", "-","*", "/",]
    const addToDisplay = (text) => {
      setDisplayVal(displayVal + text);

    }
    const evaluateExpression = () => {
        const result = eval(displayVal);
        setDisplayVal(result);
    }
  return ( <>
  <Button text= "C"onClickHandler={() => setDisplayVal('')}/>
  <br />
  {buttons.map(text => <Button key= {text} onClickHandler={()=> addToDisplay(text)} text={text}/>)}
  <br />
  {expression.map(text => <Button key= {text} onClickHandler={()=> addToDisplay(text)} text={text}/>)} <br />
  <Button text = "=" onClickHandler={evaluateExpression}/>
  </>
    
  )
}

export default NumberPad;