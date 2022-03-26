import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 0 0 30px 0;
  padding: 0;

  @media screen and (max-width: 767px) {
    max-width: 480px;
  }
`;

export { Container };
