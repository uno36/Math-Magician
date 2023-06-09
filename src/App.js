import Calculator from './components/calculator.js';
import QuoteDisplay from './components/QuoteDisplay.js';
import calculate from './logic/calculate.js';

function App() {
  return (
    <div className="App">
      <Calculator/>
      <QuoteDisplay />
    </div>
  );
}

calculate();
QuoteDisplay();
Calculator();

export default App;
