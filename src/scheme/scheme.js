import * as yup from 'yup';

const nameRegExp = RegExp(
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
);

const numberRegExp = RegExp(/[0-9]/);

export const contactSchema = yup.object().shape({
  name: yup.string().matches(nameRegExp).min(2).required(),
  number: yup.string().matches(numberRegExp).required(),
});

export const registerSchema = yup.object().shape({
  name: yup.string().matches(nameRegExp).min(2).required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).required(),
});

export const logSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).required(),
});