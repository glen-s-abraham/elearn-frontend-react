import React from 'react';
import './CourseCard.css';
const courseCard=(props)=>(
	
	<div className="CourseCard">
		<div className="CourseImage"><img src={props.image}/></div>
		<div className="CourseTitle">{props.title}</div>
	</div>

);

export default courseCard;

