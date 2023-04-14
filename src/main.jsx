import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "antd/dist/reset.css";
import "./index.css";
import { applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { logger } from "./middlewares";
import rootReducer from "./reducers/rootReducer";
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = composeAlt(applyMiddleware(thunk, logger));
const store = createStore(rootReducer, composeEnhancers);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
