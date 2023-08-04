import { useContext } from 'react';
import { TodoContext } from '../todo.provider';

export default function useTodosProvider() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('O hook deve ser usado dentro do seu contexto');
  }

  return context;
}
