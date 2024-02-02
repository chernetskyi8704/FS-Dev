import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border: 5px solid black;
`;

const LoaderItem = styled.div`
  border-width: 0.5rem;
  border-style: solid;
  border-color: purple purple purple purple;
  width: 3.625rem;
  height: 3.625rem;
  border-radius: 50%;
  position: relative;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;
  z-index: 999;

  &:before,
  &:after {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: purple;
    position: absolute;
    left: 0.125rem;
  }

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
    <Container>
      <LoaderItem />
    </Container>
  );
};

export default Loader;
