import React from 'react';

class Caculate extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      number:'',
    }
  }
  getNum = (num) => {
    this.state({
      number: num,
    })
  }

  render() { 
    return (<div>
      <div>
        <div>
          <input className="shownumber" value={this.state.number} /> 
        </div>
          <div>
            <button className="key yellow" onClick={() => this.getNum('+')}>+</button>
            <button className="key yellow" onClick={() => this.getNum('-')}>-</button>
            <button className="key yellow" onClick={() => this.getNum('x')}>x</button>
          </div>
          <div>
            <button className="key" onClick={() => this.getNum('7')}>7</button>
            <button className="key" onClick={() => this.getNum('8')}>8</button>
            <button className="key" onClick={() => this.getNum('8')}>9</button>
          </div>
          <div>
            <button className="key" onClick={() => this.getNum('4')}>4</button>
            <button className="key" onClick={() => this.getNum('5')}>5</button>
            <button className="key" onClick={() => this.getNum('6')}>6</button>
          </div>
          <div>
            <button className="key" onClick={() => this.getNum('1')}>1</button>
            <button className="key" onClick={() => this.getNum('2')}>2</button>
            <button className="key" onClick={() => this.getNum('3')}>3</button>
          </div>
          <div>
            <button className="key" onClick={() => this.getNum('0')}>0</button>
            <button className="key clear" onClick={this.clearNum}>clear</button>
            <button className="key equal" onClick={this.getResult}>=</button>
          </div>
        </div>
      </div>);
    }
}

export default Caculate;