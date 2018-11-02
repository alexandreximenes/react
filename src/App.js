import React, { Component } from 'react';
// import logo from './logo.svg';
import './css/pure-min.css';
import './css/side-menu.css';

class App extends Component {
  render() {
    return (
        <div id="layout">
            <a href="#menu" id="menuLink" className="menu-link">
                <span></span>
            </a>
            <div id="menu">
                <div className="pure-menu">
                    <a className="pure-menu-heading" href="#">Company</a>

                    <ul className="pure-menu-list">
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">About</a></li>

                        <li className="pure-menu-item menu-item-divided pure-menu-selected">
                            <a href="#" className="pure-menu-link">Services</a>
                        </li>

                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div id="main">
                <div className="header">
                    <h1>Bem vindo ao sistema em React.js</h1>
                    <h2>Sistema desenvolvido para treinamento do framework</h2>
                </div>
                </div>
            </div>
    );
  }
}

export default App;
