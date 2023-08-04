'use client';

import TodoList from '@/components/todo-list';
import Typography from '@/components/ui/typography';
import useTodo from '@/hooks/use-todo';
import { FunctionComponent } from 'react';

const items = [
  'Reutilizar código dentro da aplicação para evitar repetição e diminuir a possibilidade de lógicas que deveriam ser iguais ficarem desatualizadas;',
  'Separar e compartimentabilizar lógica dos componentes React. Deixar componentes de interface do usuário apenas responsáveis por exibir informação (baseado também no Princípio da Responsabilidade Única);',
];

const Hooks: FunctionComponent = () => {
  const { todos, createItem, removeItem } = useTodo([]);

  return (
    <div>
      <Typography variant="h2" content="Hooks" />
      <Typography variant="h3" content="O que são?" />
      <Typography
        variant="p"
        content="Hooks são essencialmente funções que permitem compartilhar lógica dentro de componentes React. A diferença de hooks pra outras funções de utilidade é que dentro dos hooks você pode fazer uso das funcionalidades do React, como, por exemplo, outros hooks padrão (useState, useEffect, etc.)."
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

export default Hooks;
