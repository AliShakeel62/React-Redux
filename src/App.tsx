import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from'./Config/Router'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux';
import store from './Config/Redux/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router/>
      </Provider>
    
    </div>
  );
}

export default App;
