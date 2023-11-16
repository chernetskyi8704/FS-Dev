import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { GlobalStyles } from "./styles/GlobalStyles.ts";
import { theme } from "./styles/theme.ts";
import store from "./store/store.ts";

const rootElement = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

rootElement.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);
