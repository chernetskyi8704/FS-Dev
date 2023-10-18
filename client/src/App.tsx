import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";

import { useState } from "react";

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <AppWrapper>
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <Main />
    </AppWrapper>
  );
};

export default App;
