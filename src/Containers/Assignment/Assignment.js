import React,{Component} from 'react';
import './Assignment.css';
class Assignment extends Component{
	state={
		Pending:"pending",
		Submitted:"submitted"
	}
	content=this.state.Pending;
	tabClickedHandler=(id)=>{
		const tabs=document.getElementsByClassName('Tab');
		for(let i=0;i<tabs.length;i++)
		{
			tabs[i].classList.remove('Active');
		}
		
		const el=document.getElementById(id);
		el.classList.add('Active');
		let div=document.querySelector('.TabContent');

		if(id=="Pending")
		{
			
			div.innerHTML=this.state.Pending;
			return;
		}
		div.innerHTML=this.state.Submitted;
		
	}
	render()
	{

		return(

				<div className="Assignment">
					<button id="Pending" className="Tab Active" onClick={()=>this.tabClickedHandler("Pending")}>Pending</button>
					<button id="Submitted" className="Tab" onClick={()=>this.tabClickedHandler("Submitted")}>Submitted</button>
					<div className="TabContent">
						{this.content}
					</div>
				</div>

			);
	}

}

export default Assignment;