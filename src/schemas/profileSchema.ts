import * as Yup from 'yup';

export const profileSchema = Yup.object().shape({
  first_name: Yup.string().required('required'),
  last_name: Yup.string().required('required'),
});
