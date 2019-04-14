const initialState = []
  
  const messages = (state = initialState, action) => {
    switch (action.type) {
      case "SAVE_MESSAGES":
        return [...state, action.payload]
      case "CLEAR_MESSAGES":
        return initialState;
      case "TRANSLATE":
        state.slice(-(action.payload.length)).map((el, index) => {
          if(el.date === action.payload[index].date){
            el.data.text = action.payload[index].TranslatedText
            return el
          } else return el
        })
        return [...state];
      default:
        return state;
    }
  };
  
  export default messages;