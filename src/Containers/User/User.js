import React,{Component} from 'react';
import '../Registration/Registration.css';
import axios from '../../axios/axios';
class User extends Component{
	state={profile:null}
	fetch=()=>{
		const AuthToken=localStorage.getItem('AuthToken')
		
		if(AuthToken)
		{

			
			axios.get("users/Profiles/",{headers:{'Authorization':`token ${AuthToken}`}})
			.then(response=>{
				
				this.setState({profile:response.data});
				
				
			})
			.catch(err=>{
				console.log(err);
			});
		}
		else{
			window.location.href="/login";
		}
	}
	componentDidMount()
	{
		this.fetch();

	}
	profileUpdateHandler=()=>{
		const id=this.state.profile[0].id
		const name=document.querySelector('#name').value;
		const email=document.querySelector('#email').value;
		const course=document.querySelector('#course').value;
		const semester=document.querySelector('#semester').value;
		const data={
			'id':id,
			'name':name,
			'email':email,
			'course':course,
			'semester':semester
		};
		const AuthToken=localStorage.getItem('AuthToken');
		axios.patch("users/Profiles/"+data.id+"/",data,{headers:{'Authorization':`token ${AuthToken}`}})
			.then(response=>{
				
				this.fetch();
				alert("Profile Updated")
				
			})
			.catch(err=>{
				console.log(err);
				alert("Error while Updating Profile");
			});
		
	}
	logoutHandler=()=>{
		localStorage.removeItem("AuthToken");
		window.location.href="/login";
	}
	render()
	{
		


		let comp=(<h1>Loading....</h1>);
		if(this.state.profile)

		{

			comp=(
					
					
					<form>
					<div className="FormControl">
						<div className="LabelBox">
							<svg className="icon" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#ffffff"/></svg>
						</div>
						<input id="name" type="text" className="TextBox" value={this.state.profile[0].name}/>


					</div>	

					<div className="FormControl">
						<div className="LabelBox">
							<svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
						</div>
						<input id="email" type="email" className="TextBox" value={this.state.profile[0].email}/>
					</div>		

					<div className="FormControl">
						<div className="LabelBox">
							<svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
						</div>
						<select id="course" className="SelectBox" >
							
							<option value="BSC.CS">Bsc computerScience</option>
							<option value="MSC.CS">Msc computerScience</option>
						</select>
					</div>

					<div className="FormControl">
						<div className="LabelBox">
							<svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>
						</div>
						<select id="semester" className="SelectBox" >
							<option value="S1">Semester1</option>
							<option value="S2">Semester2</option>
							<option value="S3">Semester3</option>
							<option value="S4">Semester4</option>
							<option value="S5">Semester5</option>
							<option value="S6">Semester6</option>
						</select>
					</div>

				
					<div className="FormControl">
						<input type="button" className="ButtonPrimary" value="Update" onClick={()=>{this.profileUpdateHandler()}}/>
						<input type="button" className="ButtonSecondary" value="LogOut" onClick={()=>{this.logoutHandler()}}/>
						
					</div>
					</form>	
					
					);
					


		}	

		return(
		<div className="Registration">
				<h2>Profile</h2>
					{comp}
				</div>
			);
	}
}

export default User;