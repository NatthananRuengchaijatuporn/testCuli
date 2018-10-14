import React,{Component} from 'react';


class SignIn extends Component{

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

	render(){
		const {onRouteChange} = this.props;
		return(
			<div>
			<p className= "br4 ba b--black-10 mv4 w-100 w-50-m w-25-l mw9 shadow-5 center f3 bg-white"> Exp Eng Extra Registration Page</p>
			<article className="br4 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" >Username</label>
				        <input 
				        className="pa2 input-reset ba  hover-bg-black hover-white w-100" 
				        id="username"
				        onChange = {this.onUsernameChange}
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        className="b pa2 input-reset ba  hover-bg-black hover-white w-100" 
				        type="password" 
				        name="password"  
				        id="password"
				        onChange = {this.onPasswordChange}
				        />
				      </div>
				    </fieldset>
				    <div className="">

				      <input onClick={()=> onRouteChange('setting')} className="b ph3 pv2 input-reset ba b--black  grow pointer f6 dib" type="submit" value="Sign in"/>
				    </div>
				  </div>
				</main>
			</article>
			</div>
		)
	}

}
//<input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black  grow pointer f6 dib" type="submit" value="Sign in"/>
export default SignIn;