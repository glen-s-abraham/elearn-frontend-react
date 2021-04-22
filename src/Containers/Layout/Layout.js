import React,{Component} from 'react';
import './Layout.css'
import Aux from '../../hoc/ReactAux/ReactAux';
import Navigation from '../../Components/Navigation/Navigation'
import Home from '../Home/Home';
import Course from '../Course/Course';
import Assignment from '../Assignment/Assignment';
import Submit from '../Submit/Submit';
import Forum from '../Forum/Forum';
import Registration from '../Registration/Registration';
import Login from '../Registration/Login';
import User from '../User/User';
import {Route} from 'react-router-dom';
import axios from 'axios';

class Layout extends Component{
	constructor()
	{
		super();
		const AuthToken=localStorage.getItem('AuthToken')
		if(AuthToken)
		{
			console.log(AuthToken);
			this.state={loggedIn:true,Token:AuthToken}

		}
		else
		{
			this.state={loggedIn:false}
		}	

	}
	
	render(){
		if(this.state.loggedIn==false)
		{
			return(
				<Route path="/login" exact component={Login}/>	
			);
		}
		return(
		<Aux>
			<div>
				<Navigation/>
				<Route path="/" exact component={Home}/>
				<Route path="/course/:id"  component={Course}/>
				<Route path="/assignment"  component={Assignment}/>
				<Route path="/forum"  component={Forum}/>
				<Route path="/submit/:status/:id"  component={Submit}/>
				<Route path="/User" exact component={User}/>
				<Route path="/Registration" exact component={Registration}/>
				<Route path="/login" exact component={Login}/>	
			</div>	
			</Aux>

		);

	}


}

export default Layout;