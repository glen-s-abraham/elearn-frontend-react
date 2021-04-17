import React,{Component} from 'react';
import './Registration.css';
import axios from 'axios';
class Login extends Component{
	formHandler=()=>{
		
		const name=document.querySelector('#name').value;
		const password=document.querySelector('#password').value;
		
		const data={
			username:name,
			password:password,
			

		}
		console.log(data);
		axios.post('http://127.0.0.1:8000/api/users/Login/',data)
		.then(response=>
		{
			
			
			localStorage.setItem('AuthToken',response.data.token);
			window.location.href="/";

		})
		.catch(err=>
		{
			alert("Something went wrong!");
			console.log(err.message)
		});



	}
	render()
	{
		return(
				<div className="Login">
					<h2>Login</h2>
					<form>
					<div className="FormControl">
						<div className="LabelBox">
							<svg className="icon" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#ffffff"/></svg>
						</div>
						<input id="name" type="text" className="TextBox"/>
					</div>	


					<div className="FormControl">
						<div className="LabelBox">
							<svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#ffffff"/></svg>
						</div>
						<input id="password" type="password" className="TextBox"/>
					</div>
					<div className="FormControl">
						<input type="button" className="ButtonPrimary" value="Login" onClick={()=>{this.formHandler()}}/>
						
					</div>
					</form>
				</div>
			);
	}
}

export default Login;