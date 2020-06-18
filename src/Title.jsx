import React from "react";
import styled from "styled-components";

const Header = styled.p`
  color: pink;
`;

const Title = props => {
  return <Header>{props.children}</Header>;
};

export default Title;
