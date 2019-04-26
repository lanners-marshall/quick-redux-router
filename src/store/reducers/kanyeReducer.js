const initialState = {
	loading: false,
	error: null,
	quote: ''
}

const kanyeReducer = (state = initialState, action) => {
	let data = action.payload
	switch (action.type){
		case 'GET_KANYE_START':
			return {...state, loading: true, quote: '', error: null}
		case 'GET_KANYE_SUCCESS':
			return {...state, loading: false, quote: data, error: null}
		case 'GET_KANYE_ERROR':
			return {...state, loading: false, quote: '', error: data}
		default:
			return state
	}
}

export default kanyeReducer