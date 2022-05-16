import { createContext, useContext, useState } from 'react';
import { Category } from '../models/Category';

type CategoriesContextProps = {
  categories: Category[];
}

const categoriesContext = createContext({} as CategoriesContextProps);

export const CategoriesProvider: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([
    { key: 'purchases', name: 'Compras', icon: 'shopping-bag', color: '#5636D3' },
    { key: 'food', name: 'Alimentação', icon: 'coffee', color: '#FF872C' },
    { key: 'salary', name: 'Salário', icon: 'dollar-sign', color: '#12A454' },
    { key: 'car', name: 'Carro', icon: 'crosshair', color: '#E83F5B' },
    { key: 'leisure', name: 'Lazer', icon: 'heart', color: '#26195C' },
    { key: 'studies', name: 'Estudos', icon: 'book', color: '#9C001A' },
  ]);

  return (
    <categoriesContext.Provider value={{ categories }}>
      { children }
    </categoriesContext.Provider>
  );
}

export const useCategories = () => useContext(categoriesContext);