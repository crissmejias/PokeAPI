import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "antd/dist/reset.css";
import "./index.css";
import { applyMiddleware, compose } from "redux";
import { pokemonsReducer } from "./reducers/pokemons";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { logger } from "./middlewares";
const composeEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
);
const store = createStore(pokemonsReducer, composeEnhancers);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
