import React from 'react';
import './AppHeader.scss';

const AppHeader = (props) => {
  return (
    <>
      <h1 className={'app-header__title'}>My Todo List</h1>
      <p className={'app-header__counter'}>{props.todo} осталось, {props.done}</p>
    </>
  );
};

export default AppHeader;
