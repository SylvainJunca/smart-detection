import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigation';
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

const FoodApi = new Clarifai.App({ apiKey: API_KEY });

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			imageURL: '',
			result: [],
      loading : false
		};
	}

	onInputChange = (event) => {
		this.setState({ input: event.target.value });
	};


	onButtonSubmit = () => {
    
		this.setState({ imageURL: this.state.input, loading : true });

		FoodApi.models.predict({ id: 'food', version: 'dfebc169854e429086aceb8368662641' }, this.state.input)
		  .then(response => {
          const arrayOfFood = !!response.outputs && !!response.outputs.length && response.outputs[0].data.concepts;
          this.setState({result : arrayOfFood, loading : false});
        }
	    )
      .catch(error => {
        console.log(error)
        this.setState({loading : false});
        alert("Something went wrong, please make sure the url points to an image : ", error);
       }
      );
		
	};
  
	render() {
		const result = !!this.state.result && this.state.result.length > 0 && <ResultList result={this.state.result} /> || '';
		return (
			<div className="App">
				<Particles className="particles" params={particlesOptions} />
				<Navigation />
				<ImageLinkForm input={this.state.input} onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} loading= {this.state.loading}/>
				<ImageRecognition imageURL={this.state.imageURL} />
			  {result}
			</div>
		);
	}
}

export default App;
