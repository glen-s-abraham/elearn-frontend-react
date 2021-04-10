import React from 'react';
import './Layout.css'
import Aux from '../../hoc/ReactAux/ReactAux';
import Navigation from '../../Components/Navigation/Navigation'
import Home from '../Home/Home';
import Course from '../Course/Course';
import {Route} from 'react-router-dom';


const layout=(props)=>{
	return(
		<Aux>
		<div>
			<Navigation/>
			<Route path="/" exact component={Home}/>
			<Route path="/course/:id"  component={Course}/>
		</div>	
		</Aux>

	);

}

export default layout;