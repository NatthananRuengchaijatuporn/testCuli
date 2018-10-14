import React,{Component} from 'react';
import './Setting.css';
import NavigationBar from '../NavigationBar/NavigationBar';

class Setting extends Component{
/*
	constructor(props){
		super(props);
		this.state ={
			signInUsername:"",
			signInPassword:""
		}
	}
	onUsernameChange = (event) =>{
		this.setState({signInUsername:event.target.value});
	}
	onPasswordChange = (event) =>{
		this.setState({signInPassword:event.target.value});
	}

	onSubmitSignIn = () =>{
		fetch('http://localhost:3000/signin',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body: JSON.stringify({
				username:this.state.signInUsername,
				password:this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(user =>{
			//check if user has id
			if (user.id){
				this.props.loadUser(user);
				this.props.onRouteChange('home');	
			}


		})
		//
	}
*/
	render(){
		const {onRouteChange} = this.props;
		return(
			<div>
			<NavigationBar/>
			<article className="br4 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center box">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">

				      <legend className="f4 fw6 ph0 mh0">Setting Activity</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" >Name of Activity</label>
				        <input 
				        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        id="activityName"
				        onChange = {this.onUsernameChange}
				        />
				      </div>

					<div className="mt3">
				        <label className="db fw6 lh-copy f6" >Type</label>
				        <input 
				        class = "type"
				        type = "radio"
						name = "type"
						value = "engClub"
						checked
				        onChange = {this.onUsernameChange}
				        /> English Club 
				        {' '}
				        <input 
				        class = "type"
				        type = "radio"
						name = "type"
						value = "converCloud"
				        onChange = {this.onUsernameChange}
				        /> Conversation Cloud<br/>
				     </div>

				     <div className="mt3">
				        <span className="db fw6 lh-copy f6" >Date {' '}
				        <input 
				        type ="date"
				        onChange = {this.onUsernameChange}
				        />
				        </span>
				      </div>

				      <div className="mt3">
				        <span className="db fw6 lh-copy f6" >From {' '}
				        <input 
				        type ="time"
				        onChange = {this.onUsernameChange}
				        />
				        </span>
				      </div>


				     <div className="mt3">
				        <span className="db fw6 lh-copy f6" >To {' '}
				        <input 
				        type ="time"
				        onChange = {this.onUsernameChange}
				        />
				        </span>
				      </div>

				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" >Teacher's name</label>
				        <input 
				        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        id="teacherName"
				        onChange = {this.onUsernameChange}
				        />
				      </div>

				      <div className="mt3">
				        <span className="db fw6 lh-copy f6" >Number of Student
				        <input 
				        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        id="numberOdStudent"
				        onChange = {this.onUsernameChange}
				        />
				        </span>
				      </div>

				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" >Description</label>
				        <input 
				        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 des" 
				        id="description"
				        onChange = {this.onUsernameChange}
				        />
				      </div>
				    </fieldset>
				    <div className="">
				      <input onClick={()=> onRouteChange('history')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Create"/>
				    </div>
				  </div>
				</main>
			</article>
			</div>
		)
	}

}
//<input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Create"/>
export default Setting;