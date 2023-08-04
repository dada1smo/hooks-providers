'use client';
import { ItemProps } from '@/components/todo-list';
import { createContext, useState } from 'react';

type TodoContextProps = {
  todos: ItemProps[] | [];
  createItem: Function;
  removeItem: Function;
};

export const TodoContext = createContext<TodoContextProps | null>(null);

export const TodoProvider = ({ children }: any) => {
  const [todos, setTodos] = useState<ItemProps[] | []>([]);

  const createItem = (data: any) => {
    const id = `${new Date().toString()}-${todos.length}`;
    setTodos((prev) => [...prev, { title: data.title, id: id }]);
  };

  const removeItem = (id: string) => {
    setTodos((prev) => {
      const filter = prev.filter((p) => p.id !== id);
      return filter;
    });
  };

  return (
    <TodoContext.Provider value={{ todos, createItem, removeItem }}>
      {children}
    </TodoContext.Provider>
  );
};
