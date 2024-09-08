import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import getProductsReducers from './reducers/getProductsReducers'; // Example reducer

// Your reducers
const reducer = combineReducers({
  getProducts: getProductsReducers,
});

// Middleware
const middleware = [thunk];

// Create store
const store = createStore(
  reducer,
  applyMiddleware(...middleware) // Apply middleware correctly
);

export default store;
