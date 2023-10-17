import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createGlobalStyle } from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`;

root.render(
  <>
    <Global />
    <App />
  </>
);
