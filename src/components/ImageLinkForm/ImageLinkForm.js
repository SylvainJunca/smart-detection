import React from 'react';
import './ImageLinkForm.css';
import isURL from "validator/lib/isURL";

const ImageLinkForm = ({ onInputChange, onButtonSubmit, input, loading }) => {

	const validation = () => {
      if(isURL(input)) {
		return onButtonSubmit();
	  }
      
	  alert("The URL you submitted is invalid");
	  
	}

	return (
		<div>
			<p className="f3 white">This App will detect food in pictures</p>
			<p className="f3 white">copy an image link in the form below</p>
			<div className="center">
				<div className="form center pa4 br3 shadow-5">
					<input className="f4 pa2 w-70 center" type="text" onChange={onInputChange} />
					<button className="w-30 grow f4 link ph3 dib white bg-purple" onClick={validation}>
						{!!loading && 'Loading...' || 'Detect'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;
