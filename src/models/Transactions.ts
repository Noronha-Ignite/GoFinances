export type TransactionType = 'income' | 'outcome';

export type Transaction = {
  timestamp: number;
  name: string;
  amount: number;
  category: string;
  type: TransactionType;
};

export type NewTransaction = Omit<Transaction, 'timestamp'>;
