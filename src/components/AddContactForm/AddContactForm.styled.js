import styled from "styled-components";
import { Form } from "formik";

export const AddForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
  @media screen and (max-width: 900px) {
    margin: 0 0 30px 0;
  }
  @media screen and (min-width: 901px) {
    margin: 0 30px 0 0;
  }
`;