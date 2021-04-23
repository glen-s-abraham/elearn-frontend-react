import React,{Component} from 'react';
import Aux from '../../hoc/ReactAux/ReactAux';
import './Forum.css';
import axios from 'axios';

class Forum extends Component{
	state={threads:[]}
	componentDidMount(){

		const AuthToken=localStorage.getItem('AuthToken')
		
		if(AuthToken)
		{

			
			axios.get("http://127.0.0.1:8000/api/community/threads/",{headers:{'Authorization':`token ${AuthToken}`}})
			.then(response=>{
				
				this.setState({threads:response.data});
				console.log(response.data)
				
			})
			.catch(err=>{
				console.log(err);
			});
		}
		else{
			window.location.href="/login";
		}

	}
	threadDisplayHandler=(id)=>{
		
		const AuthToken=localStorage.getItem('AuthToken');
		axios.get("http://127.0.0.1:8000/api/community/threads/"+id+"/",{headers:{'Authorization':`token ${AuthToken}`}})
			.then(response=>{
				
				this.setState({thread:response.data});
				console.log(response.data)
				
			})
			.catch(err=>{
				console.log(err);
			});
		axios.get("http://127.0.0.1:8000/api/community/replies/?tid="+id,{headers:{'Authorization':`token ${AuthToken}`}})
			.then(response=>{
				
				this.setState({replies:response.data});
				console.log(response.data)
				
			})
			.catch(err=>{
				console.log(err);
			});

	}
	postReplyHandler=()=>{
		if(this.state.thread){
			const id=this.state.thread.id;
			const content=document.querySelector("#commentBox").value;
			if(content)
			{
				const data={'thread':id,'reply':content,'author':1}
				const AuthToken=localStorage.getItem('AuthToken');
				axios.post("http://127.0.0.1:8000/api/community/replies/",data,{headers:{'Authorization':`token ${AuthToken}`}})
				.then(response=>{
					
					this.setState({thread:response.data});
					console.log(response.data)
					this.threadDisplayHandler(id);
					
				})
				.catch(err=>{
					console.log(err);
				});
			}
			document.querySelector("#commentBox").value="";
		}
	}
	render(){
		let content=(<h1>Loading..</h1>);
		let replies='';
		let topic='';
 		if(this.state.threads)
		{
			content=this.state.threads.map(el=>{return(<a className="ThreadsLink" onClick={()=>{this.threadDisplayHandler((el.id))}} href="#">{el.subject}</a>)});
			
		}
		if(this.state.thread){
				topic=(<div className="Topic"><h1>{this.state.thread.subject}</h1><p>{this.state.thread.descreption}</p></div>);
		}
		if(this.state.replies)
		{
			
			replies=this.state.replies.map(el=>(<div className="Reply"><p>{el.reply}</p></div>))
			
		}	
		return(
			<Aux>
				<div className="Threads">
					<h1>Threads</h1>
					{content}
				</div>
				<div className="Discussions">
					{topic}
					{replies}
				
				</div>
				<div className="CommentBar">
					<input id="commentBox" className="CommentText" type="text" placeholder="Enter Reply"/>
					<button className="ReplyButton" onClick={()=>{this.postReplyHandler()}}>
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z"/></svg>
					</button>
				</div>
			</Aux>
		);	
	}

}

export default Forum;