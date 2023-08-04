import { FunctionComponent } from 'react';
import Typography from '../ui/typography';
import { Button } from '../ui/button';
import TodoForm from './todo-form';

export interface ItemProps {
  id: string;
  title: string;
}

interface TodoProps {
  items: ItemProps[];
  handleCreate: Function;
  handleRemove: Function;
}

const TodoList: FunctionComponent<TodoProps> = ({
  items,
  handleCreate,
  handleRemove,
}) => {
  return (
    <div className="my-4">
      {items.length > 0 &&
        items.map(({ id, title }) => {
          return (
            <div
              key={id}
              className="flex items-center justify-between gap-4 border-b py-3"
            >
              <p>{title}</p>
              <Button variant="destructive" onClick={() => handleRemove(id)}>
                Excluir
              </Button>
            </div>
          );
        })}
      {items.length === 0 && (
        <div className="flex justify-center">
          <Typography variant="muted" content="Adicione itens abaixo" />
        </div>
      )}
      <TodoForm handleCreate={handleCreate} />
    </div>
  );
};

export default TodoList;
