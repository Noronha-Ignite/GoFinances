import styled from 'styled-components/native';
import TransactionTypeButton from '../../../../components/Forms/TransactionTypeButton';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

type FormTransactionTypeButtonProps = {
  type: 'income' | 'outcome';
}

export const FormTransactionTypeButton = styled(TransactionTypeButton)<FormTransactionTypeButtonProps>`
  margin: ${({ type }) => type === 'income' ? '0 4px 0 0' : '0 0 0 4px'};
`