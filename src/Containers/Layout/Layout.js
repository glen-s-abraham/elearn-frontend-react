import React from 'react';
import './Layout.css'
import Aux from '../../hoc/ReactAux/ReactAux';
import Navigation from '../../Components/Navigation/Navigation'
import Home from '../Home/Home';
import Course from '../Course/Course';
import Registration from '../Registration/Registration';
import Login from '../Registration/Login';
import User from '../User/User';
import {Route} from 'react-router-dom';


const layout=(props)=>{
	return(
		<Aux>
		<div>
			<Navigation/>
			<Route path="/" exact component={Home}/>
			<Route path="/course/:id"  component={Course}/>
			<Route path="/User" exact component={User}/>
			<Route path="/Registration" exact component={Registration}/>
			<Route path="/login" exact component={Login}/>
		</div>	
		</Aux>

	);

}

export default layout;