import React,{Component} from 'react';
import './Submit.css';
class Submit extends Component{

	render()
	{

		return(

				<div className="Submit">
					<div className="Question">
						<h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h2>
					</div>
					<div className="UploadBar">
						<h3>Upload file </h3>
						<form>
							<input type="file" className="FileUpload"/><br/>
							<input type="submit" className="ButtonPrimary"/>
						</form>
					</div>
				</div>

			);
	}

}

export default Submit;