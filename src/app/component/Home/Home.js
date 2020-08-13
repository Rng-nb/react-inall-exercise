import React from 'react';
import './home.less';
import {Link} from 'react-router-dom';
import calculator from '../../../images/calculator.png';
import timer from '../../../images/timer.png';
const Home = () => {
  return (<div className="home">
    <div className="desc">在线实用工具</div>
    <div className="option">
      <div className="calculator">
        <div className="picture"><img src={calculator} /></div>
        <div>
          <Link to="/caculate" className="word">计算器</Link>
        </div>
      </div>
      <div className="timer">
        <div className="picture"><img src={timer} /></div>
        <div>
          <Link to="/count" className="word">倒计时器</Link>
        </div>
      </div>
    </div>
  </div>);
};

export default Home;