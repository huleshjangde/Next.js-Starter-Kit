'use client';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store'; // Adjust the import path based on your directory structure

interface ProviderProps {
  children: ReactNode;
}

const ReduxProvider = ({ children }: ProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
