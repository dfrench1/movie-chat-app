const initialState = 'en';
  
  const lang = (state = initialState, action) => {
    switch (action.type) {
      case "SAVE_LANG":
        return state = action.payload
      default:
        return state;
    }
  };
  
  export default lang;