import styled from "styled-components";

export const BodyContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  @media screen and (min-width: 480px) {
    padding: 0 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    padding: 0 100px;
  }
  @media screen and (min-width: 1200px) {
    padding: 0 200px;
  }
`;
