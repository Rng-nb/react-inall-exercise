import React from 'react';
import {Link} from 'react-router-dom';
import './Count.css';
import 'bootstrap/dist/css/bootstrap.css';

class Count extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          count: 0,
          state:'Strat',
          start: false,
      }
    }

    
      
 
    componentWillUnmount () {
      clearInterval(this.timer)
    }

    handleInputChange = (event) => {
        this.setState({
            count: parseInt(event.target.value, 10)
        })
    }

    setCount = () => {
        this.setState({
            start: true,
            state: 'End',
        })
        this.timer = setInterval(() => {
            if(this.state.count >= 1) {
              this.setState({ 
              count: this.state.count - 1,
              })
            } else {
              clearInterval(this.timer)
              this.setState({
                start: false,
                state: 'Start',
            })
            }
        }, 1000)
    }
    render() { return (
    <div className="countback">
      <div className="countdes">在线倒计时器</div>
      <div className="count">
        <div className="countoption">
          <div className="countinput">
              <div className="showinput">
                <label htmlFor="myinput">设置时间</label>
                <input type="text" className="form-control myinput" name="myinput" onChange={this.handleInputChange}/> 
              </div>
              <div className="inputbutton">
                <button className="btn btn-primary mybutton" disabled={this.state.start} onClick={this.setCount}>{this.state.state}</button>
              </div>
          </div>
            <div className="showcount">{`${this.state.count}Seconds`}</div>
        </div>
        <div className="backtohome">
          <Link to="/">回到主页</Link>
        </div>
      </div>
    </div>);
    }
}

export default Count;