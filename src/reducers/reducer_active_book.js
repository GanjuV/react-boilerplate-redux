// state -> not the application only the state this reducer responsible for.
    // Never mutate the state to create a new version of state. Object return from reducer must 
    // be 100% clean.
export default function(state = null, action){
  switch(action.type) {
    case 'BOOK_SELECTED': 
      return action.payload;
    default: 
      return state;  
  }
}