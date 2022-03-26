import styled from "styled-components";
import { Avatar, Button } from "antd";

export const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const Text = styled.p`
  margin: 0 0 0 10px;
  font-size: 18px;
  color: white;

  @media screen and (max-width: 359px) {
    display: none;
  }
`;

export const StyledAvatar = styled(Avatar)`
  background-color: gold;
`;

export const StyledButton = styled(Button)`
  margin-left: 10px;
  font-size: 16px;
  color: cornflowerblue;

  &:hover {
    background-color: gold;
  }
`;
