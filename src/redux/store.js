import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";
import uiReducer from "./reducers/uiReducer";
import dataReducer from "./reducers/dataReducer";
import emailReducer from "./reducers/emailReducer";

const initialState = {};
const middleware = [thunk];

const laaReducers = combineReducers({
  user: userReducer,
  data: dataReducer,
  UI: uiReducer,
  email: emailReducer
});

const store = createStore(
  laaReducers,
  initialState,
  compose(
    applyMiddleware(...middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
