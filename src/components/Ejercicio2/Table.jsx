import React from 'react';
import './Table.css';

const Table = ({ netIncomes }) => {
  const totalIncome = netIncomes.reduce((total, item) => total + item.income, 0);
  const averageIncome = (totalIncome / netIncomes.length).toFixed(2);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Ingreso Neto</th>
          </tr>
        </thead>
        <tbody>
          {netIncomes.map((item, index) => (
            <tr key={index}>
              <td>{item.brand}</td>
              <td>{item.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Promedio de ingresos: {averageIncome}</p>
    </div>
  );
};

export default Table;
