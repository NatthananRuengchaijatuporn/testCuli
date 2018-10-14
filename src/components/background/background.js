import React from 'react';
import './background.css';
import chula from './chula.jpg';

const Background = ()=>{
	return(
		<div className = 'ma4 mt0'>
			
			 <div className="pa3"><img style={{paddingTop:'5px'}} alt='logo' src={chula} /> </div>

		</div>
		);
}

export default Background;