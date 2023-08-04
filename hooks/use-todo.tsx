'use client';

import { ItemProps } from '@/components/todo-list';
import { useState } from 'react';

function useTodo(initial: ItemProps[] | []) {
  const [todos, setTodos] = useState<ItemProps[] | []>(initial);

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

  return {
    todos,
    createItem,
    removeItem,
  };
}

export default useTodo;
