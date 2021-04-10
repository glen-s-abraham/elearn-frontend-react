import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';
class Navigation extends Component{
	linkClickedHandler=(id)=>
	{
		const links=document.getElementsByClassName('FilledPath');
		for(let i=0;i<links.length;i++)
		{
			links[i].classList.remove('active');
		}
		
		const el=document.getElementById(id);
		el.classList.add('active');
		
	}
	render()
	{
		return(
			<nav className='Navigation'>
				<div className="Logo">
					<svg id="Component_4_1" data-name="Component 4 – 1" xmlns="http://www.w3.org/2000/svg" width="48" height="51" viewBox="0 0 58 61">
					<text id="E" transform="translate(0 50)" fill="#2c8d29" font-size="50" font-family="Impact"><tspan x="0" y="0">E</tspan></text>
					<text id="du" transform="translate(23 43)" fill="#fff" font-size="30" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">du</tspan></text>
					</svg>
				</div>
				<div className="NavLinks">
					<ul>
						<li>
							<Link to="/" onClick={()=>{this.linkClickedHandler("Home")}}>
								<svg   xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40"><path id="Home" className="FilledPath active" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#ffffff"/></svg>
							</Link>
						</li>

						<li>
							<Link to="/assignment" onClick={()=>{this.linkClickedHandler("Assignment")}}>
								<svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 0 24 24" width="38"><path id="Assignment" className="FilledPath" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="#ffffff"/></svg>
							</Link>		
						</li>

						<li>
							<Link to="/forum" onClick={()=>{this.linkClickedHandler("Forum")}}>
								<svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 0 24 24" width="40"><path  id="Forum" className="FilledPath" d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" fill="#ffffff"/></svg>		
							</Link>		
						</li>

						<li>
							<Link to="/user" onClick={()=>{this.linkClickedHandler("User")}}>
								<svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40"><path id="User" className="FilledPath" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#ffffff"/></svg>
								
							</Link>		
						</li>



					</ul>
				</div>
			</nav>


		);
	}
	
}
export default Navigation;