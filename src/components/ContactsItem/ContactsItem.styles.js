import { Avatar, Button } from "antd";
import styled from "styled-components";
import avatar from "./avatar.png";

export const Container = styled.li`
  /* display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-gap: 2vw; */
  padding: 5px;
  align-items: center;
  font-weight: 500;

  background-color: #eee;

  @media screen and (max-width: 767px) {
    width: calc((100% - 15px) / 2);
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: calc((100% - 45px) / 4);
  }

  @media screen and (min-width: 1200px) {
    width: calc((100% - 75px) / 6);
  }
`;

export const AvatarStyled = styled(Avatar).attrs({
  src: avatar,
  alt: "Avatar",
})`
  width: 100%;
  height: auto;
  padding: 10px;
`;

export const LinkPhone = styled.a`
  display: block;
  text-decoration: none;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1em;
`;

export const Number = styled.p`
  margin-bottom: 10px;
  text-align: center;
  font-size: 1em;
  color: grey;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const ButtonStyled = styled(Button).attrs({
  type: "primary",
})`
  width: calc((100% - 5px) / 2);

  &:first-child:hover {
    background-color: green;
  }

  &:last-child:hover {
    background-color: red;
  }
`;
