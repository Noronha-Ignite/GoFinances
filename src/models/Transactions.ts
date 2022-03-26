import { CategoryKey } from "./Category";

export type TransactionType = 'income' | 'outcome' | 'total';

export type Transaction = {
  timestamp: number;
  name: string;
  amount: string;
  category: CategoryKey;
  type: TransactionType;
};
