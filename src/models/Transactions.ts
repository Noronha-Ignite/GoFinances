export type TransactionType = 'income' | 'outcome' | 'total';

export type Transaction = {
  timestamp: number;
  name: string;
  amount: number;
  category: string;
  type: TransactionType;
};
