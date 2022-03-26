import styled from "styled-components";

export const StyledContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
