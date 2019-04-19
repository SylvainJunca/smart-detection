import React from 'react';

const ImageRecognition = ({ imageURL }) => {
	return (
		<div className="center">
			<img src={imageURL} alt="uploaded" />
		</div>
	);
};

export default ImageRecognition;
