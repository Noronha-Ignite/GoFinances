import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório*'),
  amount: Yup.string().required('Campo obrigatório*'),
  type: Yup.string().oneOf(['income', 'outcome'], 'Tipo inválido'),
  category: Yup.object().shape({
    key: Yup.string().required('Campo obrigatório*'),
    name: Yup.string().required('Campo obrigatório*'),
    icon: Yup.string().required('Campo obrigatório*'),
    color: Yup.string().required('Campo obrigatório*'),
  }).required('Campo obrigatório*'),
});
