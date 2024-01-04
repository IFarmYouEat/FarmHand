const cropReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_YIELDS':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default cropReducer;