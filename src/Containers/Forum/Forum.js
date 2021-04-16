import React,{Component} from 'react';
import Aux from '../../hoc/ReactAux/ReactAux';
import './Forum.css';
class Forum extends Component{
	render(){
		return(
			<Aux>
				<div className="Threads">
					<h1>new topic</h1>
					<h1>new topic</h1><h1>new topic</h1><h1>new topic</h1><h1>new topic</h1><h1>new topic</h1>
					<h1>new topic</h1><h1>new topic</h1><h1>new topic</h1><h1>new topic</h1><h1>new topic</h1>
					<h1>new topic</h1><h1>new topic</h1><h1>new topic</h1><h1>new topic</h1><h1>new topic</h1>
				</div>
				<div className="Discussions">
				</div>
			</Aux>
		);	
	}

}

export default Forum;