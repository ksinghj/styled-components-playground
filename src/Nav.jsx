import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2em;
  box-shadow: 0px 7px 22px -9px rgba(0, 0, 0, 0.5);
`;

const Logo = styled.div`
  color: grey;
`;

const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const FlexItem = styled.div`
  margin: 0 1em;
`;

class Nav extends React.Component {
  render() {
    // TODO: props w bg image
    return (
      <Container>
        <Logo>web.dev</Logo>
        <Options>
          {this.props.children.map(option => {
            return <FlexItem>{option}</FlexItem>;
          })}
        </Options>
      </Container>
    );
  }
}

export default Nav;
