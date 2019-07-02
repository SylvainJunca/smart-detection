import React from 'react';
import './ImageRecognition.css'

const ImageRecognition = ({ imageURL }) => {
	const image = imageURL ? <img src={imageURL} alt="uploaded" /> : '';
	return (
		<div className="center">
			{image}
		</div>
	);
};

export default ImageRecognition;
