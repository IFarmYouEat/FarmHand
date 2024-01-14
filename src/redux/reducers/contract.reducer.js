const contractReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_CONTRACTS':
            return action.payload
        default:
            return state;
    }
}

export default contractReducer;