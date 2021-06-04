import React,{Component} from 'react';
import './Submit.css';
import axios from '../../axios/axios';
class Submit extends Component{
	state={assignment:[]}
	componentDidMount(){

		const AuthToken=localStorage.getItem('AuthToken')
		
		if(AuthToken)
		{
			
			axios.get("assignments/"+this.props.match.params.status+"/"+this.props.match.params.id+"/",{headers:{'Authorization':`token ${AuthToken}`}})
			.then(response=>{
				
				this.setState({assignment:response.data});
				
				
			})
			.catch(err=>{
				console.log(err);
			});
		}
		else{
			window.location.href="/login";
		}

	}
	submissionHandler=()=>{
		
		let formData=new FormData()
		formData.append('aid',document.querySelector("#aid").value);
		formData.append('file',document.querySelector("#file").files[0]);
		const AuthToken=localStorage.getItem('AuthToken')
		axios.post("assignments/submissions/",formData,{headers:{'Authorization':`token ${AuthToken}`}})
			.then(response=>{
				
				
				window.location.href="/assignment";
				
			})
			.catch(err=>{
				console.log(err);
			});
		
	}
	render()
	{
		let content="Loading..."
		if(this.state.assignment)
		{
			content=(<div className="Question">
				<h2>{this.state.assignment['topic']}</h2>
				<p>Posted on:{this.state.assignment['date']}</p>
				</div>);
			
			
		}
		return(

				<div className="Submit">
					{content}
					<div className="UploadBar">
						<h3>Upload file </h3>
						<form id="submissionForm">
							<input type="hidden" id="aid" value={this.props.match.params.id}/>
							<input type="file" id="file" className="FileUpload" required/><br/>
							<input type="button" className="ButtonPrimary" onClick={()=>{this.submissionHandler()}} value="Submit"/>
						</form>
					</div>
				</div>

			);
	}

}

export default Submit;