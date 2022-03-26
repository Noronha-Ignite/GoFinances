export type TransactionType = 'income' | 'outcome' | 'total';

export type Transaction = {
  timestamp: number;
  name: string;
  amount: string;
  category: string;
  type: TransactionType;
};
