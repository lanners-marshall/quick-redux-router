import React from 'react';
import {getJoke} from '../store/actions/jokeActions.js'
import { connect } from "react-redux";

class Joke extends React.Component {
	constructor(){
		super();
		this.state = {};
	}

	componentDidMount(){
		this.props.getJoke()
	}

	render() {
		const {loading, error, joke} = this.props
		return (
			<div>
				{loading ? (
					<div>LOADING JOKE ...</div>
					) : 
					<div><p>{joke}</p></div>
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.joke.loading,
		error: state.joke.error,
		joke: state.joke.joke
	}
}

export default connect(mapStateToProps, {getJoke})(Joke);