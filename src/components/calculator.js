function Calculator() {
  return (
    <div className="calculator">
      <div className="display">
        <span>0</span>
      </div>
      <div className="functional-buttons">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="orange-btn">
          ÷
        </button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="orange-btn">
          x
        </button>

        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="orange-btn">
          -
        </button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="orange-btn">
          +
        </button>
        <button type="button" className="grid-item">
          0
        </button>
        <button type="button">.</button>
        <button type="button" className="orange-btn">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
