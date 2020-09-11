import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.scss';

const TodoList = ({todos, onDelete, onDone, onImportant}) => {

  const todosEl = todos.map((item) => {
    const {id, ...itemProps} = item;

    return (
      <TodoListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onDone={() => onDone(id)}
        onImportant={() => onImportant(id)}
      />
    );
  });

  return(
    <ul className={'todo-list'}>
      {todosEl}
    </ul>
  );
};

export default TodoList;
