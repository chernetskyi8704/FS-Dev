import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";

const AppWrapper = styled.div`
  position: relative;
  max-width: 1440px;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Main />
    </AppWrapper>
  );
};

export default App;
