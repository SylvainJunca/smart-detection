import React from 'react';

const ImageRecognition = ({ imageURL }) => {
	return (
		<div className="center">
			<img style= {{maxWidth : '80%'}} src={imageURL} alt="uploaded" />
		</div>
	);
};

export default ImageRecognition;
