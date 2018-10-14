import React, { Component } from 'react';
import SignIn from './components/SignIn/SignIn';
import 'tachyons';
import './App.css';
import Setting from './components/Setting/Setting';
import History from './components/History/History';

//<SignIn/>
const initialState = {
	route : 'home',
	isSignedIn : false,
}


class App extends Component {
	constructor(){
		super();
		this.state = initialState;
	}

	onRouteChange = (route) => {
	//if(route === 'home') this.setState({isSignIn:true})
	this.setState({route:route});
	}
  render() {
  	const {isSignedIn,route} = this.state;
  	if (route ==='home'){
  		return(
			<div className="App">
			    <SignIn onRouteChange={this.onRouteChange}/>
			</div>
  			)
  	}else if(route === 'history'){
  		return(
			<div className="App">
			    <History onRouteChange={this.onRouteChange}/>
			</div>
  			)
  	}else if(route === 'setting'){
  		return(
  			<div className="App">
			    <Setting onRouteChange={this.onRouteChange}/>
			</div>
  			)
  	}
  	/*
	return (
      <div className="App">
        <History/>
      </div>
    );

  	*/
    
  }
}
//<Setting />
export default App;
