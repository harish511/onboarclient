import React from 'react';
import logo from './logo.svg';
import './App.css';
import OnBoardForm from './OnBoard/onboardform.js';
import SignIn from './OnBoard/SignIn.js';

import Dashboard from './dashboard/Dashboard.js';

import Address from './OnBoard/address.js';

import UserIndentity from './OnBoard/UserIdentityInfo.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <SignIn/>

      <OnBoardForm/>

      <Address/>

      <UserIndentity/>

      <Dashboard/>
        
      </header>
    </div>
  );
}

export default App;
