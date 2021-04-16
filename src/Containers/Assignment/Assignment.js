import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Assignment.css';
class Assignment extends Component{
	state={
		assignments:[]
	}
	constructor()
	{
		super();
		this.state={assignments:[{"id":1,"topic":"pending 1"},{"id":2,"topic":"pending 2"}]};	
	}

	componentDidMount(){
		console.log("component Up");
		
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
		if(id=="Pending")
		{	
			this.setState({assignments:[{"id":1,"topic":"pending 1"},{"id":2,"topic":"pending 2"}]});
		}
		else if(id=="Submitted")
		{	
			this.setState({assignments:[{"id":1,"topic":"submitted 1"},{"id":2,"topic":"submitted 2"}]});	
		}	
		
		
		
	}
	render()
	{

		const content=this.state.assignments.map(el=>{
			
			return (
				<Link to={"/submit/"+el.id}>
					<h2>{el.topic}</h2>
				</Link>	
				);
		});
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