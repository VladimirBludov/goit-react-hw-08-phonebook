import Title from "antd/lib/typography/Title";
import styled from "styled-components";

export const SectionContainer = styled.section`
  margin: 30px 0 0;
`;

export const TitleStyled = styled(Title).attrs({
  level: 2,
})`
  /* color: blueviolet; */
  text-align: center;
  margin-bottom: 15px;
`;
