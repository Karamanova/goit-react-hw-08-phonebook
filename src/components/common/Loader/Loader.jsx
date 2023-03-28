import FadeLoader from "react-spinners/ClipLoader";
import { LoaderContainer } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderContainer>
      <FadeLoader color="white" size={150} />
    </LoaderContainer>
  );
}