import axios from 'axios'

export const getJoke = () => {
	return dispatch => {
		dispatch({type: 'GET_JOKE_START'})
		axios.get('http://api.icndb.com/jokes/random/')
		.then(res => {
			dispatch({type: 'GET_JOKE_SUCCESS', payload: res.data.value.joke})
		})
		.catch(error => {
			dispatch({type: 'GET_JOKE_ERROR', payload: error})
		})
	}
}