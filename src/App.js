import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageRecognition from './components/ImageRecognition/ImageRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import ResultList from './components/Result/ResultList'

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
			imageURL: '',
			result: []
		};
	}

	onInputChange = (event) => {
		this.setState({ input: event.target.value });
	};

	onButtonSubmit = async () => {
		this.setState({ imageURL: this.state.input });
		let app = new Clarifai.App({ apiKey: API_KEY });

		const result = await app.models.predict({ id: 'food', version: 'dfebc169854e429086aceb8368662641' }, this.state.input).then(
			function(response) {
				const arrayOfFood = response.outputs[0].data.concepts
				return arrayOfFood;
			},
			function(err) {
				alert(err);
			}
		);
		this.setState({result})
	};
  
	render() {
		console.log(this.state.result)
		const result = (this.state.result.length > 0) ? 	<ResultList result={this.state.result} /> : ''
		return (
			<div className="App">
				<Particles className="particles" params={particlesOptions} />
				<Navigation />
				<Logo />
				<ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
				<ImageRecognition imageURL={this.state.imageURL} />
			  {result}
			</div>
		);
	}
}

export default App;
