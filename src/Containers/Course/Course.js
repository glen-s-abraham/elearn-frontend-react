import React,{Component} from 'react';
import './Course.css';
import Aux from '../../hoc/ReactAux/ReactAux';
import axios from '../../axios/axios';
class Course extends Component{
	state={lessons:[]};
	componentDidMount()
	{
		const AuthToken=localStorage.getItem('AuthToken')
		
		if(AuthToken)
		{
			console.log(this.props.match.params.id);
			axios.get("lessons/?cid="+this.props.match.params.id,{headers:{'Authorization':`token ${AuthToken}`}})
			.then(response=>{
				this.setState({lessons:response.data});
				
				
			})
			.catch(err=>{
				console.log(err);
			});
		}
		else{
			window.location.href="/login";
		}
	}
	render()
	{
		const lessons=this.state.lessons.map(lesson=>{
			return(<span className="Lesson"  onClick={()=>{
				const player=document.querySelector('#video-player')
				player.src=lesson.lesson
				
			}}>
			{lesson.lessonname}
			</span>);
		})


		return(
			<Aux>
			<div className='Course'>
				<video id="video-player" className="Player" controls>
					
				</video>
			</div>
			<div className="Lessons">
				
				{lessons}
			</div>
			</Aux>

		);
	}

}

export default Course;