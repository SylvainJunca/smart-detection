import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageRecognition from './components/ImageRecognition/ImageRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

const API_KEY = process.env.REACT_APP_API_KEY;

const particlesOptions = {
	particles: {
		number: {
			value: 120,
			density: {
				enable: true,
				value_area: 800
			}
		},
		retina_detect: true
	}
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			imageURL: ''
		};
	}

	onInputChange = (event) => {
		this.setState({ input: event.target.value });
	};

	onButtonSubmit = () => {
		this.setState({ imageURL: this.state.input });
		let app = new Clarifai.App({ apiKey: API_KEY });

		app.models.predict({ id: 'food', version: 'dfebc169854e429086aceb8368662641' }, this.state.input).then(
			function(response) {
				console.log(response);
			},
			function(err) {
				// there was an error
			}
		);
	};

	render() {
		return (
			<div className="App">
				<Particles className="particles" params={particlesOptions} />
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
				<ImageRecognition imageURL={this.state.imageURL} />
			</div>
		);
	}
}

export default App;
