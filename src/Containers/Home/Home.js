import React,{Component} from 'react';
import './Home.css'
import CourseCard from '../../Components/CourseCard/CourseCard';
import {Link} from 'react-router-dom';
import axios from 'axios';
class Home extends Component{
	state={courses:[]};
	componentDidMount()
	{
		const AuthToken=localStorage.getItem('AuthToken')
		
		if(AuthToken)
		{
			
			axios.get('http://127.0.0.1:8000/api/courses/',{headers:{'Authorization':`token ${AuthToken}`}})
			.then(response=>{
				this.setState({courses:response.data});
				
			})
			.catch(err=>{
				console.log(err);
			});
		}
		else
		{
			window.location.href="/login";
		}
	}
	render()
	{
		const content=this.state.courses.map(el=>{
			console.log(el.cover);
			return(
				<Link to={`course/${el.id}`} style={{ textDecoration: 'none' }}>
				<CourseCard image={el.cover} title={el.title}/>
			</Link>	);	
			
			
		});
		
		return(

			<div className="Home">
				{content}
			
			</div>	

			);
	}
}
export default Home;