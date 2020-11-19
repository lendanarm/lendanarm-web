import {
  BOOK_DEMO,
  BECOME_DONOR
} from "../types";

const initialState = {
  message: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case BOOK_DEMO:
      return {
        ...state,
        message: action.payload,
      };
    case BECOME_DONOR:
    return {
        ...state,
        message: action.payload,
      };
    
    default:
      return state;
  }
}
