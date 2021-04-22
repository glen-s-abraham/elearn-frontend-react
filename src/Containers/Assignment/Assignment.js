import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Assignment.css';
import axios from 'axios'
class Assignment extends Component{
	state={
		assignments:[]
	}
	constructor()
	{
		super();
		this.state={status:'pending'};	
	}

	componentDidMount(){
		const AuthToken=localStorage.getItem('AuthToken')
		
		if(AuthToken)
		{

			
			axios.get("http://127.0.0.1:8000/api/assignments/pending/",{headers:{'Authorization':`token ${AuthToken}`}})
			.then(response=>{
				
				this.setState({assignments:response.data});
				
				
			})
			.catch(err=>{
				console.log(err);
			});
		}
		else{
			window.location.href="/login";
		}
		
		}
	tabClickedHandler=(id)=>{
		const tabs=document.getElementsByClassName('Tab');
		for(let i=0;i<tabs.length;i++)
		{
			tabs[i].classList.remove('Active');

		}
		
		const el=document.getElementById(id);
		el.classList.add('Active');
		let div=document.querySelector('.TabContent');
		let content="";
		const AuthToken=localStorage.getItem('AuthToken')
		if(AuthToken){
		if(id=="Pending")
		{	
			
			axios.get("http://127.0.0.1:8000/api/assignments/pending/",{headers:{'Authorization':`token ${AuthToken}`}})
			.then(response=>{
				
				this.setState({status:'pending',assignments:response.data});
				
				
			})
			.catch(err=>{
				console.log(err);
			});
		}
		else if(id=="Submitted")
		{	
			const AuthToken=localStorage.getItem('AuthToken')
			
			axios.get("http://127.0.0.1:8000/api/assignments/completed/",{headers:{'Authorization':`token ${AuthToken}`}})
			.then(response=>{
				
				this.setState({status:'completed',assignments:response.data});
				
				
			})
			.catch(err=>{
				console.log(err);
			});

		}
		}	
		
		
		
	}
	render()
	{
		let content="Loading.."
		if(this.state.assignments){
			content=this.state.assignments.map(el=>{
			
				return (
					<Link to={"/submit/"+this.state.status+"/"+el.id}>
						<h2>{el.topic}</h2>
					</Link>	
					);
			});
		}
		return(

				<div className="Assignment">
					<button id="Pending" className="Tab Active" onClick={()=>this.tabClickedHandler("Pending")}>Pending</button>
					<button id="Submitted" className="Tab" onClick={()=>this.tabClickedHandler("Submitted")}>Submitted</button>
					<div className="TabContent">
						{content}
					</div>
				</div>

			);
	}

}

export default Assignment;