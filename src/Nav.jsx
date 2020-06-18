import React from "react";
import styled from "styled-components";

const FlexItem = styled.div`
  padding: 2em;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-evenly;
`;

class Nav extends React.Component {
  render() {
    return (
      <Box>
        {this.props.children.map(option => {
          return <FlexItem>{option}</FlexItem>;
        })}
      </Box>
    );
  }
}

export default Nav;
