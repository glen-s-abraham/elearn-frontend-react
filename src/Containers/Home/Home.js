import React,{Component} from 'react';
import './Home.css'
import CourseCard from '../../Components/CourseCard/CourseCard';
import {Link} from 'react-router-dom';
class Home extends Component{
	render()
	{
		return(

			<div className="Home">
			<Link to={"course/"+"1"} style={{ textDecoration: 'none' }}>
				<CourseCard image={"image"} title={"title"}/>
			</Link>	
		
			</div>	

			);
	}
}
export default Home;