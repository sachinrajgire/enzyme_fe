import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import OrderedList from './components/OrderedList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Login />
       <OrderedList />

      </header>
    </div>
  );
}

export default App;
