import { useField } from "formik";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { ErrorText } from "components/common/ErrorText.styled";

export const InputPhone = ({ ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  return (
    <>
      <PhoneInput
        {...props}
        {...field}
        value={field.value}
        id="number"
        defaultCountry="ua"
        preferredCountries={["ua"]}
        autoFormat={true}
        //masks={{ua: '(..) ...-..-..'}}
        onChange={(value) => {
          helpers.setValue(value);
        }}
        containerStyle={{
          color: 'black',
          marginBottom: "15px",}}
        inputStyle={{
          outline: "2px solid #D75C78",
          borderRadius: "5px"
        }}
      />
      {meta.error && meta.touched && <ErrorText>{meta.error}</ErrorText>}
    </>
  );
};