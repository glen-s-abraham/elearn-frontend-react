import React,{Component} from 'react';
import Aux from '../../hoc/ReactAux/ReactAux';
import './Forum.css';
import axios from '../../axios/axios';

class Forum extends Component{
	state={threads:[],}

	fetchThreads(){
		const AuthToken=localStorage.getItem('AuthToken')
		axios.get("community/threads/",{headers:{'Authorization':`token ${AuthToken}`,'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}})
			.then(response=>{
				
				this.setState({threads:response.data});
				
				
			})
			.catch(err=>{
				console.log(err);
			});
	}
	async getUserId()
	{
		const AuthToken=localStorage.getItem('AuthToken')
		let userId;
		if(AuthToken)
		{

			
			await axios.get("users/Profiles/",{headers:{'Authorization':`token ${AuthToken}`}})
			.then(response=>{

				userId=response.data[0].id;
				console.log(response.data[0].id);
				
				
			})
			.catch(err=>{
				console.log(err);
			});
		}
		else{
			window.location.href="/login";
		}
		return userId;
	}
	componentDidMount(){

		const AuthToken=localStorage.getItem('AuthToken')
		
		if(AuthToken)
		{

			this.fetchThreads()
			
		}
		else{
			window.location.href="/login";
		}


	}
	threadDisplayHandler=(id)=>{
		
		const AuthToken=localStorage.getItem('AuthToken');
		axios.get("community/threads/"+id+"/",{headers:{'Authorization':`token ${AuthToken}`}})
			.then(response=>{
				
				this.setState({thread:response.data});
				
			})
			.catch(err=>{
				console.log(err);
			});
		axios.get("community/replies/?tid="+id,{headers:{'Authorization':`token ${AuthToken}`}})
			.then(response=>{
				
				this.setState({replies:response.data});
				
				
			})
			.catch(err=>{
				console.log(err);
			});
			if(window.innerWidth<500)
			{
				document.querySelector(".Threads").classList.add("Hide");
			}

	}
	postReplyHandler=async ()=>{
		if(this.state.thread){
			const id=this.state.thread.id;
			const content=document.querySelector("#commentBox").value;
			if(content)
			{
				const userId=await this.getUserId();
				const data={'thread':id,'reply':content,'author':userId}
				console.log(data);
				const AuthToken=localStorage.getItem('AuthToken');
				axios.post("community/replies/",data,{headers:{'Authorization':`token ${AuthToken}`}})
				.then(response=>{
					
					this.setState({thread:response.data});
					this.threadDisplayHandler(id);
					
				})
				.catch(err=>{
					console.log(err);
				});
			}
			document.querySelector("#commentBox").value="";
		}
	}
	toggleHiddenHandler=()=>{
		document.querySelector(".Modal").classList.toggle("Hide");
		document.querySelector(".ThreadForm").classList.toggle("Hide");
	}
	threadCreateHandler=async ()=>{
		const AuthToken=localStorage.getItem('AuthToken');
		let data=new FormData()
		const userId=await this.getUserId();
		console.log(userId);
		const subject=document.querySelector("#subject").value;
		const descreption=document.querySelector("#descreption").value;
		data.append('author',userId);
		data.append('subject',subject);
		data.append('descreption',descreption)
		
		axios.post("community/threads/",data,{headers:{'Authorization':`token ${AuthToken}`}})
			.then(response=>{
				
				
				this.fetchThreads()
				this.toggleHiddenHandler();
				
			})
			.catch(err=>{
				console.log(err);
			});
		document.querySelector("#subject").value="";	
		document.querySelector("#descreption").value="";
	}
	unhideThreadsHandler=()=>{
		if(window.innerWidth<500)
			{
				document.querySelector(".Threads").classList.remove("Hide");
			}
	}
	render(){
		let content=(<h1>Loading..</h1>);
		let replies='';
		let topic='';
 		if(this.state.threads)
		{
			content=this.state.threads.map(el=>{return(<a className="ThreadsLink" onClick={()=>{this.threadDisplayHandler((el.id))}} href="#">{el.subject}<hr/></a>)});
			
		}
		if(this.state.thread){
				topic=(<div className="Topic"><a className="Back" onClick={()=>{this.unhideThreadsHandler()}} href="#"> {"<"} </a><h1>{this.state.thread.subject}</h1><p>{this.state.thread.descreption}</p></div>);
		}
		if(this.state.replies)
		{
			
			replies=this.state.replies.map(el=>(<div className="Reply"><p>{el.reply}</p></div>))
			
		}	
		return(
			<Aux>

				<div className="ThreadForm Hide">
					<h2 className="ThreadTitle">Create Thread</h2>
						<label className="Label">Topic</label>	
						<input id="subject" type="text" className="Text" placeholder="Enter Topic"/>
						<label className="Label">Descreption</label>
						<input id="descreption" type="text" className="Descreption" />
						<div>
							<button className="Button" onClick={()=>{this.threadCreateHandler()}}>Create</button>
							<button className="Cancel" onClick={()=>{this.toggleHiddenHandler()}}>Cancel</button>
						</div>
				</div>

				<div className="Modal Hide" onClick={()=>{this.toggleHiddenHandler()}}>
				</div>
				
				<div className="Threads" >
					<div className="ThreadHeader">
					<h1>Threads</h1>
					<button onClick={()=>{this.toggleHiddenHandler()}} className="ThreadCreate">+</button>
					</div>
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