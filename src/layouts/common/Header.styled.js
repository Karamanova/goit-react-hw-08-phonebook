import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 0 0;
  @media screen and (min-width: 480px) {
   padding: 20px 0 0 0;
  }
  @media screen and (min-width: 768px) {
    padding: 40px 0 0 0;
  }
`;