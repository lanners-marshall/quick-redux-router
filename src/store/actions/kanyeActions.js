import axios from 'axios'

export const getQuote = () => {
	return dispatch => {
		dispatch({type: 'GET_KANYE_START'})
		axios.get('https://api.kanye.rest/')
		.then(res => {
			console.log(res)
			dispatch({type: 'GET_KANYE_SUCCESS', payload: res.data.quote})
		})
		.catch(error => {
			dispatch({type: 'GET_KANYE_ERROR', payload: error})
		})
	}
}
