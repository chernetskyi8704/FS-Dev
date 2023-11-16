import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  user-select: none;
  // overflow: hidden;
`;

const App = () => {
  return (
    <AppWrapper>
      {/* <Header /> */}
      <Main />
    </AppWrapper>
  );
};

export default App;
