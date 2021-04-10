import React,{Component} from 'react';
import './Course.css';
import Player from '../../Components/Player/Player';
import Aux from '../../hoc/ReactAux/ReactAux';
class Course extends Component{

	render()
	{
		return(
			<Aux>
			<div className='Course'>
				<Player/>
			</div>
			<div className="Lessons">
				<span className="Lesson">1.lesson</span>
				<span className="Lesson">2.lesson</span>
				<span className="Lesson">3.lesson</span>
				<span className="Lesson">4.lesson</span>
				<span className="Lesson">5.lesson</span>
				<span className="Lesson">1.lesson</span>
				<span className="Lesson">2.lesson</span>
				<span className="Lesson">3.lesson</span>
				<span className="Lesson">4.lesson</span>
				<span className="Lesson">5.lesson</span>
				<span className="Lesson">1.lesson</span>
				<span className="Lesson">2.lesson</span>
				<span className="Lesson">3.lesson</span>
				<span className="Lesson">4.lesson</span>
				<span className="Lesson">5.lesson</span>
			</div>
			</Aux>

		);
	}

}

export default Course;