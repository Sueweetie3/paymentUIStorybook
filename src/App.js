import React from 'react';
import logo from './logo.svg';
import BankAccount from './components/BankAccount';
import { bankAccountData } from './stories/2-BankAccount.stories';
import './App.css';

function App() {
  return (
    <div className="App">
      <BankAccount {...bankAccountData} platform='rw' />
    </div>
  );
}

export default App;
