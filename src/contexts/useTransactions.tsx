import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { NewTransaction, Transaction } from "../models/Transactions";

type TransactionContextProps = {
  transactions: Transaction[];
  isLoading: boolean;
  createTransaction: (transaction: NewTransaction) => Promise<void>;
}

const TransactionContext = createContext({} as TransactionContextProps);

export const TransactionContextProvider: React.FC = ({ children }) => {
  const TRANSACTION_STORAGE_KEY = '@gofinances:transactions'

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);

  const getTransactions = async () => {
    try {
      const response = await AsyncStorage.getItem(TRANSACTION_STORAGE_KEY);
  
      return JSON.parse(response ?? '[]') as Transaction[];
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  const fetchTransactions = () => {
    setLoading(true);

    getTransactions()
      .then(transactions => setTransactions(transactions))
      .finally(() => setLoading(false))
  }

  const createTransaction = useCallback(async (transaction: NewTransaction) => {
    const previousTransactions = await getTransactions();

    const newTransactions: Transaction[]  = [
      ...previousTransactions,
      {
        ...transaction,
        timestamp: new Date().getTime()
      }
    ];

    await AsyncStorage.setItem(TRANSACTION_STORAGE_KEY, JSON.stringify(newTransactions));
    setTransactions(newTransactions);
  }, []);

  useEffect(fetchTransactions, []);

  return (
    <TransactionContext.Provider value={{
      transactions,
      isLoading: loading,
      createTransaction
    }}>
      {children}
    </TransactionContext.Provider>
  );
}

export const useTransactions = () => useContext(TransactionContext);
