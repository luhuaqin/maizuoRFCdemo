const CityReducer = (prevState={cityName: '北京'}, action) => {
	const newState = {...prevState}
	switch(action.type) {
		case 'cityChange':
			newState.cityName = action.payload
			return newState
		default:
			return prevState
	}
}

export default CityReducer
