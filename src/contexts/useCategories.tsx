import { createContext, useContext, useState } from 'react';
import { Category } from '../models/Category';

type CategoriesContextProps = {
  categories: Category[];
}

const categoriesContext = createContext({} as CategoriesContextProps);

export const CategoriesProvider: React.FC = ({ children }) => {
  
  const [categories, setCategories] = useState<Category[]>([
    { key: 'buy', icon: 'dollar-sign', name: 'Compras' },
    { key: 'car', icon: 'navigation', name: 'Carro' },
    { key: 'food', icon: 'coffee', name: 'Alimentação' },
    { key: 'sell', icon: 'dollar-sign', name: 'Vendas' },
    { key: 'home', icon: 'home', name: 'Casa' },
  ]);

  return (
    <categoriesContext.Provider value={{ categories }}>
      { children }
    </categoriesContext.Provider>
  );
}

export const useCategories = () => useContext(categoriesContext);