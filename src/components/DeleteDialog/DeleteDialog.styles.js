import styled from "styled-components";

export const ButtonDialog = styled.button`
  display: inline-block;
  cursor: pointer;
  margin: 6px 12px;
  padding: 12px 16px;
  border-radius: 12px;
  border: solid #ff0000 2px;

  &.primary {
    background-color: #ff0000;
    color: white;
  }

  &.secondary {
    background-color: white;
    color: #ff0000;
  }
`;

export const Dialog = styled.div`
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  background-color: white;
  color: rgb(23, 2, 66);
  border-radius: 24px;
  border: solid #ff0000 6px;
  padding: 12px 24px;
  max-width: 400px;
  text-align: center;
`;

export const Title = styled.p`
  color: #ff0000;
  font-weight: bold;
  text-align: center;
  font-size: 1.25em;
  margin: 6px 0;
`;

export const Content = styled.p``;
