import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "./store/store.ts";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

ul,li {
  list-style-type: none;
}`;

const rootElement = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

rootElement.render(
  <Provider store={store}>
    <BrowserRouter>
      <Global />
      <App />
    </BrowserRouter>
  </Provider>
);
