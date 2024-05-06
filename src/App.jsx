import React from 'react';
// import Ejercicio1 from './components/Ejercicio1/Ejercicio1.jsx';
import Table from './components/Ejercicio2/Table.jsx';
import Login from './components/Ejercicio3/Login.jsx';
import './App.css';

function App() {
  const netIncomes = [
    { brand: 'McDonalds', income: 1291283 },
    { brand: 'Burger King', income: 1927361 },
    { brand: 'KFC', income: 1098463 },
  ];

  return (
    <div className="App">
      {/* <Ejercicio1 /> */}
      <Table netIncomes={netIncomes} />
      <Login />
    </div>
  );
}

export default App;