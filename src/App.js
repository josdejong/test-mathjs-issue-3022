import { useState } from 'react'
import './App.css';
import { evaluate, format } from 'mathjs'

function tryEvaluate(expr) {
  try {
    return format(evaluate(expr))
  } catch (err) {
    return String(err)
  }
}

function App() {
  const [expr, setExpr] = useState('sqrt(-16)')
  const result = tryEvaluate(expr)

  return (
    <div className="App">
      <input value={expr} onChange={event => setExpr(event.target.value)} />
      <div>
      Result: {result}
      </div>
    </div>
  );
}

export default App;
