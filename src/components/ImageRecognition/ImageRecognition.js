import React from 'react';
import './ImageRecognition.css'

const ImageRecognition = ({ imageURL }) => {
	const image = imageURL ? <img src={imageURL} alt="uploaded" /> : '';
	return (
		<span className="thumbnail center">
			{image}
		</span>
	);
};

export default ImageRecognition;
