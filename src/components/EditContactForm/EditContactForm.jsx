import PropTypes from 'prop-types';
import { Notify } from "notiflix";
import { Formik, ErrorMessage } from "formik";
import { useRedux } from "hooks/useRedux";
import { editContactAsync, getItems } from "redux/contactsSlice";
import { contactSchema } from "scheme/scheme";
import { EditForm } from "./EditContactForm.styled";
import { Input } from "components/common/Input.styled";
import { ErrorText } from "components/common/ErrorText.styled";
import { SecondaryButton } from "components/common/SecondaryButton.styled";

export const EditContactForm = ({ item, onClose }) => {
  const [dispatch, useSelector] = useRedux();
  const items = useSelector(getItems);

  const validateContact = data => {
    const normalizedValue = data.name.toLowerCase();
    const result = items.find(item =>
      item.name.toLowerCase() === normalizedValue
    );
    return result;
  };

  const normalizedContact = str => {
    const normalizedName = str
      .split(' ')
      .map(item => item[0].toUpperCase() + item.slice(1))
      .join(' ');
    return normalizedName;
  };

  const submitHandler = (values) => {
    const contact = {
      id: item.id,
      name: normalizedContact(values.name),
      number: values.number,
    };
    if (validateContact(contact)) {
      Notify.failure(`${contact.name} already exist`);
      return;
    } else {
      dispatch(editContactAsync(contact));
      onClose();
    }
  };
  
  return (
    <Formik
      initialValues={{ name: item.name, number: item.number }}
      onSubmit={submitHandler}
      validationSchema={contactSchema}
    >
      {props => (
        <EditForm>
          <Input
            type="text"
            name="name"
            onChange={props.handleChange}
            value={props.values.name} />
          <ErrorMessage name="name" render={msg => <ErrorText>{msg}</ErrorText>} />
          <Input
            type="text"
            name="number"
            onChange={props.handleChange}
            value={props.values.number} />
          <ErrorMessage name="number" render={msg => <ErrorText>{msg}</ErrorText>} />
          <SecondaryButton type="submit">EDIT CONTACT</SecondaryButton>
        </EditForm>
      )}
    </Formik>
  );
};

EditContactForm.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
}