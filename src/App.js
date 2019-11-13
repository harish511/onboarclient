import React from 'react';
import logo from './logo.svg';
import './App.css';
import OnBoardForm from './OnBoard/onboardform.js';
import SignIn from './OnBoard/SignIn.js';

import Dashboard from './dashboard/Dashboard.js';



import UserIndentity from './OnBoard/UserIdentityInfo.js';

import HorizontalLabelPositionBelowStepper from './OnBoard/stepbar.js';

import MenuAppBar from './OnBoard/MenuAppBar.js';

import Welcome from './OnBoard/Welcome.js'

//const ActiveComponent=OnBoardForm;

class App extends React.Component {

  constructor(props){
   super(props);
   this.state={
    ActiveComponent:"OnBoardForm",
    userInfo:{}
   }
  }


login=(userInfo)=>{

  this.setState({ActiveComponent:"Welcome"});

}

signInClick=()=>{

  const ActiveComponent="SignIn";
  this.setState({ActiveComponent});

}

signUpClick=()=>{

  const ActiveComponent="OnBoardForm";
  this.setState({ActiveComponent});

}

showSuitabilityProcess=()=>{

  const ActiveComponent="Suitability";
  this.setState({ActiveComponent});

}

renderActiveComponent=()=>{
const ActiveComponent=this.state.ActiveComponent;
  if(ActiveComponent==="OnBoardForm"){
    return (<OnBoardForm signInClick={this.signInClick} login={this.login}/>)
  }

  if(ActiveComponent==="SignIn"){
    return (<SignIn signIn={this.signIn} signUpClick={this.signUpClick} login={this.login}/>)
  }


  if(ActiveComponent==="Welcome"){
    return (<Welcome userInfo={this.state.userInfo}/>)
  }



  // if(ActiveComponent==="Suitability"){
  //   return (<Suitability/>)
  // }
}


  render() {

    
    return (
    <div className="App"> 
      <MenuAppBar/>
      {
        this.renderActiveComponent()
      }
    </div>
  );
  }
}

export default App;
