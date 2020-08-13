import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Caculate.css';
class Caculate extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      number:'',
    }
  }

  getNum = (num) => {
    this.setState({
      number: this.state.number + num,
    })
  }
  
  getResult = () => {
    let resultcalculate = 0;
    let numberinput = this.state.number;
    if (numberinput.indexOf('+') != -1) {
      let numberadd = numberinput.split('+');
        resultcalculate = parseInt(numberadd[0], 10) + parseInt(numberadd[1], 10);
    }
    if (numberinput.indexOf('-') != -1) {
      let numberadd = numberinput.split('-');
        resultcalculate = parseInt(numberadd[0], 10) - parseInt(numberadd[1], 10);
    }
    if (numberinput.indexOf('x') != -1) {
      let numberadd = numberinput.split('x');
        resultcalculate = parseInt(numberadd[0], 10) * parseInt(numberadd[1], 10);
    }
    this.setState({
      number: resultcalculate + '',
    })
  }

  clearNum = () => {
    this.setState({
      number: '',
    })
  }
  render() { 
    return (<div className="calculateback">
      <div className="calculatedes">在线计算器</div>
      <div className="calculate">
        <div className="textout">
          <input type="text" class="form-control myinput" value={this.state.number} disabled="disabled" /> 
        </div>
          <div className="buttonflex">
            <button className="btn btn-primary mybutton yello" onClick={() => this.getNum('+')}>+</button>
            <button className="btn btn-primary mybutton yello" onClick={() => this.getNum('-')}>-</button>
            <button className="btn btn-primary mybutton yello" onClick={() => this.getNum('x')}>x</button>
          </div>
          <div className="buttonflex">
            <button className="btn btn-primary mybutton orange" onClick={() => this.getNum('7')}>7</button>
            <button className="btn btn-primary mybutton orange" onClick={() => this.getNum('8')}>8</button>
            <button className="btn btn-primary mybutton orange" onClick={() => this.getNum('8')}>9</button>
          </div>
          <div className="buttonflex">
            <button className="btn btn-primary mybutton orange" onClick={() => this.getNum('4')}>4</button>
            <button className="btn btn-primary mybutton orange" onClick={() => this.getNum('5')}>5</button>
            <button className="btn btn-primary mybutton orange" onClick={() => this.getNum('6')}>6</button>
          </div>
          <div className="buttonflex">
            <button className="btn btn-primary mybutton orange" onClick={() => this.getNum('1')}>1</button>
            <button className="btn btn-primary mybutton orange" onClick={() => this.getNum('2')}>2</button>
            <button className="btn btn-primary mybutton orange" onClick={() => this.getNum('3')}>3</button>
          </div>
          <div className="buttonflex">
            <button className="btn btn-primary mybutton orange" onClick={() => this.getNum('0')}>0</button>
            <button className="btn btn-primary mybutton purple" onClick={this.clearNum}>clear</button>
            <button className="btn btn-primary mybutton red" onClick={this.getResult}>=</button>
          </div>
        </div>
        <div className="backtohome">
          <Link exact to="/">回到主页</Link>
        </div>
      </div>);
    }
}

export default Caculate;