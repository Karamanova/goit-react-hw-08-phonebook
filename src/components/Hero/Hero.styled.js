import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 460px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const HeroTitle = styled.h1`
   font-weight: 700;
  text-align: left;
  font-size: 20px;
  margin-bottom: 10px;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(90deg, #5B31F7, #31EBF7);

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 30px;
  }
  
  @media screen and (min-width: 1200px) {
    font-size: 40px;
  }
`;

export const HeroText = styled.p`
  text-align: left;
  color: #9baacf;
  font-size: 14px;
  margin-bottom: 10px;
  padding-left: 10px;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    max-width: 400px;
  }
  
  @media screen and (min-width: 1200px) {
    max-width: 600px;
    font-size: 20px;
  }
`;

export const HeroImageWrapper = styled.div`
  margin-right: 20px;
`;

export const HeroTitleWrapper = styled.div`
  text-align: center;
`;
