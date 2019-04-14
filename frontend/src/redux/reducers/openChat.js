const initialState = false
  
  const openChat = (state = initialState, action) => {
    switch (action.type) {
      case "OPEN_CHAT":
        return action.payload
      default:
        return state;
    }
  };
  
  export default openChat;