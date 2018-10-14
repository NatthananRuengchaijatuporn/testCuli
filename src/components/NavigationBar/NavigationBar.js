import React, { Component } from 'react';
import './NavigationBar.css';
class NavigationBar extends Component{

	render(){
		
		return(
			<div class="topnav">
			  <a class="active" href="#home">Home</a>
			  <a href="#news">Create New Activity</a>
			  <a href="#contact">Check Attendance</a>
			  <a href="#about">View Created Activity</a>
			  <a href="#about">History</a>
			</div>
		)
	}

}

export default NavigationBar;