import React from 'react';
import './TodoListItem.scss';

const TodoListItem = (props) => {
  const {label, done, important, onDelete, onDone, onImportant} = props;

  let classes = ['todo-list__label'];

  done ? classes.push('todo-list__label--done') : false;
  important ? classes.push('todo-list__label--important') : false;

  return(
    <li className={'todo-list__item'}>
      <span className={classes.join(' ')} onClick={onDone}>{label}</span>
      <p className={'todo-list__control'}>
        <button type={'button'} className={'todo-list__control-button todo-list__control-button--green'}
          onClick={onImportant}>
          <i className="fa fa-exclamation" aria-hidden="true"/>
        </button>
        <button type={'button'} className={'todo-list__control-button todo-list__control-button--red'}
          onClick={onDelete}>
          <i className='fa fa-times' aria-hidden='true'/>
        </button>
      </p>
    </li>
  );
};

export default TodoListItem;
