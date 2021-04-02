//import logo from './logo.svg';

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import CustomerList from './CustomersList';
import CustomerCreateUpdate from './CustomerCreateUpdate';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//exemplo
const BaseLayout = () => (
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Django React Demo
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        arial-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup"></div>
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="/">
          CUSTOMERS
        </a>
        <a className="nav-item nav-link" href="/customer">
          CREATE CUSTOMER
        </a>
      </div>
    </nav>

    <div className="content">
      <Route path="/" exact component={CustomerList} />
      <Route path="/customer/:pk" component={CustomerCreateUpdate} />
      <Route path="/customer" exact component={CustomerCreateUpdate} />
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    );
  }
}

//fim exemplo
export default App;
