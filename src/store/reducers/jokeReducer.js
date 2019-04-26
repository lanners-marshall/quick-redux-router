const initialState = {
	loading: false,
	error: null,
	joke: ''
}

const jokeReducer = (state = initialState, action) => {
	let data = action.payload
	switch (action.type){
		case 'GET_JOKE_START':
			return {...state, loading: true, joke: '', error: null}
		case 'GET_JOKE_SUCCESS':
			return {...state, loading: false, joke: data, error: null}
		case 'GET_JOKE_ERROR':
			return {...state, loading: false, joke: '', error: data}
		default:
			return state
	}
}

export default jokeReducer