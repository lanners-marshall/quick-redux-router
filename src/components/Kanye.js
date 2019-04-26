import React from 'react';
import {getQuote} from '../store/actions/kanyeActions.js'
import { connect } from "react-redux";

class Kanye extends React.Component {
	constructor(){
		super();
		this.state = {};
	}

	componentDidMount(){
		this.props.getQuote()
	}

	render() {
		const {loading, quote, error} = this.props
		return (
			<div>
				{loading ? (
					<div>LOADING QUOTE...</div>
				) :
					<div>{quote}</div>
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.kanye.loading,
		quote: state.kanye.quote,
		error: state.kanye.error
	}
}

export default connect(mapStateToProps, {getQuote})(Kanye);