import './Calculator.css'
import { useState } from 'react'

function Calculator() {

  const [num, setNum] = useState("")
  const [oldNum, setOldNum] = useState("")
  const [operator, setOperator] = useState("")
  const [result, setResult] = useState("")

  function inputValue(e) {
    setNum(num + e.target.value)
  }

  function clearCount() {
    setNum("")
    setOldNum("")
    setOperator("")
    setResult("")
  }

  function handleOperator(e) {
    if(num && !oldNum) {
      setNum("")
      setOldNum(num)
      setOperator(e.target.value)
    }

    if(oldNum) {
      setOperator(e.target.value)
    }
  }

  function percentage() {
    if(num && !oldNum) {
      setNum(num/100)
    }
  }

  function changeSign() {
    if(num && !oldNum) {
      setNum(num*(-1))
    }
  }

  function calculate() {
    if(operator === "+") {
      setResult(parseFloat(oldNum) + parseFloat(num))
      setNum("")
      setOldNum("")
      setOperator("")
    } else if(operator === "-") {
      setResult(parseFloat(oldNum) - parseFloat(num))
      setNum("")
      setOldNum("")
      setOperator("")
    } else if(operator === "x") {
      setResult(parseFloat(oldNum) * parseFloat(num))
      setNum("")
      setOldNum("")
      setOperator("")
    } else if(operator === "/") {
      setResult(parseFloat(oldNum) / parseFloat(num))
      setNum("")
      setOldNum("")
      setOperator("")
    }
  }

  return (
    <div className="calculator">
      <div className="view">
        <div>{operator ? [oldNum, operator, num] : [num, operator, oldNum]}</div>
        <div className="view_result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={clearCount} value={""} className="btn btn-clear">AC</button>
        <button onClick={changeSign} className="btn btn-clear">+/-</button>
        <button onClick={percentage} className="btn btn-operator">%</button>
        <button onClick={handleOperator} value={"/"} className="btn btn-operator">/</button>
        <button onClick={inputValue} value={7} className="btn">7</button>
        <button onClick={inputValue} value={8} className="btn">8</button>
        <button onClick={inputValue} value={9} className="btn">9</button>
        <button onClick={handleOperator} value={"x"} className="btn btn-operator">x</button>
        <button onClick={inputValue} value={4} className="btn">4</button>
        <button onClick={inputValue} value={5} className="btn">5</button>
        <button onClick={inputValue} value={6} className="btn">6</button>
        <button onClick={handleOperator} value={"-"} className="btn btn-operator">-</button>
        <button onClick={inputValue} value={1} className="btn">1</button>
        <button onClick={inputValue} value={2} className="btn">2</button>
        <button onClick={inputValue} value={3} className="btn">3</button>
        <button onClick={handleOperator} value={"+"} className="btn btn-operator">+</button>
        <button onClick={inputValue} value={0} className="btn btn-big">0</button>
        <button onClick={inputValue} value={"."} className="btn">.</button>
        <button onClick={calculate} className="btn btn-result">=</button>
      </div>
    </div>
  )
}

export default Calculator
