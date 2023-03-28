import imgDesktop from "images/desktop-1x.png";
import { HeroTitle, HeroText, HeroWrapper, HeroImageWrapper, HeroTitleWrapper } from "./Hero.styled";

export const Hero = () => {
  return (
    <>
      <HeroTitleWrapper>
        <HeroTitle>Welcome to CONTACT KEEPER</HeroTitle>
      </HeroTitleWrapper>
      <HeroWrapper>
        <HeroImageWrapper>
          <picture>
            <source srcSet={imgDesktop} media="(min-width: 1200px)" width="500px" />
            <source srcSet={imgDesktop} media="(min-width: 768px)" width="280px" />
            <source srcSet={imgDesktop} media="(min-width: 320px)" width="300px" />
            <img src={imgDesktop} alt="Chat" />
          </picture>
        </HeroImageWrapper>
        <HeroText>This is the ultimate solution for organizing and managing your contacts! Our easy-to-use application allows you to save, edit, and delete contacts within a few seconds. With Contact Keeper you can effortlessly store all of your important contacts in one place and access them from anywhere, on any device.</HeroText>
      </HeroWrapper>
    </>
  );
};
