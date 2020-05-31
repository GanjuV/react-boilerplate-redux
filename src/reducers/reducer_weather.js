import { FETCH_WEATEHR } from "../actions";

export default function(state = [], action){
  switch(action.type){
    case FETCH_WEATEHR: 
      return [ action.payload.data, ...state ];
    default:
      return state
  }
}