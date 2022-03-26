import styled from "styled-components";
import { Button } from "antd";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 18px;
  transition: color 250ms linear;
  cursor: pointer;

  &:hover {
    color: gold;
  }
`;

export const ButtonStyled = styled(Button)`
  width: 48px;
  height: 48px;
  margin-bottom: 20px;
  margin-left: 10px;
  border: none;

  &:hover {
    background-color: gold;
  }
`;
