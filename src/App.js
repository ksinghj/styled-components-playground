import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Nav from "./Nav";

const Box = styled.div`
  padding: 2em;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
`;

const Container = styled.div`
  font-family: Helvetica, sans-serif;
`;

class App extends React.Component {
  render() {
    return (
      <Container>
        <Nav>{["Home", "About", "Contact"]}</Nav>
        <Box>
          <p>App</p>
          <Title>props.children</Title>
        </Box>
      </Container>
    );
  }
}

export default App;
