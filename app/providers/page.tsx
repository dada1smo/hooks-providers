'use client';

import TodoList from '@/components/todo-list';
import Typography from '@/components/ui/typography';
import useTodosProvider from '@/providers/hook/use-todos-provider';
import { FunctionComponent } from 'react';

const items = [
  'Similar aos hooks, permite reutilizar e separar as responabilidades do código;',
  'Garantir o compartilhamento global de dados, reduzindo a quantidade de requisições feitas;',
];

const Providers: FunctionComponent = () => {
  const { todos, createItem, removeItem } = useTodosProvider();

  return (
    <div>
      <Typography variant="h2" content="Providers" />
      <Typography variant="h3" content="O que são?" />
      <Typography
        variant="p"
        content="Providers são formas de compartilhar e gerenciar estados globalmente. Servem alguns propósitos similares aos hooks, mas nos providers você tem a garantia de que os mesmos dados vão ser compartilhados globalmente dentro da aplicação independente da árvore de componentes."
      />
      <Typography variant="h3" content="Por que usar?" />
      <Typography variant="list" items={items} />
      <Typography variant="h3" content="Exemplo" />

      <TodoList
        items={todos}
        handleCreate={createItem}
        handleRemove={removeItem}
      />
    </div>
  );
};

export default Providers;
