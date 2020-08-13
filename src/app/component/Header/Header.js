import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (<div className="header">
            <ul className="linklist">
              <li>
                <Link to='/' className="linkactive">Home</Link>
              </li>
              <li>
                <Link to='/caculate' className="linkactive">在线计算器</Link>
              </li>
              <li>
                <Link to='/count' className="linkactive">在线倒计时</Link>
              </li>
            </ul>
          </div>);
};

export default Header;