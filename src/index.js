import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./websites/AdminDashboard/contexts/ContextProvider";
import { Provider } from "react-redux";
import store from "./websites/ChatAssignment/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ContextProvider>
      {/* // admin dashboard cotext provider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
