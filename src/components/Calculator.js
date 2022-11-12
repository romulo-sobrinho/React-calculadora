import './Calculator.css'

function Calculator() {
  return (
    <div className="calculator">
      <div className="view">Tela</div>
      <div className="buttons">
        <button className="btn btn-clear">AC</button>
        <button className="btn btn-clear">C</button>
        <button className="btn btn-operator">%</button>
        <button className="btn btn-operator">/</button>
        <button className="btn">7</button>
        <button className="btn">8</button>
        <button className="btn">9</button>
        <button className="btn btn-operator">x</button>
        <button className="btn">4</button>
        <button className="btn">5</button>
        <button className="btn">6</button>
        <button className="btn btn-operator">-</button>
        <button className="btn">1</button>
        <button className="btn">2</button>
        <button className="btn">3</button>
        <button className="btn btn-operator">+</button>
        <button className="btn btn-big">0</button>
        <button className="btn">,</button>
        <button className="btn btn-result">=</button>
      </div>
    </div>
  )
}

export default Calculator
