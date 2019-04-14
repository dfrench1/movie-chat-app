export function filterReducer(state, action){
    switch(action.type){
        case 'setFilter':
          return {val: action.val};
        case 'search':
          return {val: action.val};
        default:
          return state
    }
}