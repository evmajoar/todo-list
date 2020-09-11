import React, {Component} from 'react';
import './App.scss';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import AddItem from '../AddItem/AddItem';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Cofee'),
      this.createTodoItem('Задание 2'),
      this.createTodoItem('Задание 3'),
    ],
    term: ''
  };

  createTodoItem(label) {
    return {
      id: this.maxId++,
      label,
      important: false,
      done: false
    };
  }

  targetItem(arr, id) {
    return arr.findIndex((el) => el.id === id);
  }

  toggleProp(arr, id, propName) {
    const idx = this.targetItem(arr, id);

    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    };

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = this.targetItem(todoData, id);
      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({todoData}) => {
      const newArray = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArray
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProp(todoData, id, 'done')
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProp(todoData, id, 'important')
      };
    });
  };
  
  search(items, term) {
    if(term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label
        .toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  onSearchChange = (term) => {
    this.setState({term});
  }

  render() {
    const {todoData, term} = this.state;

    const visibleItem = this.search(todoData, term);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return(
      <div className={'app__inner-container'}>
        <header className={'app__header'}>
          <AppHeader todo={todoCount} done={doneCount} />
        </header>
        <main className={'app__main'}>
          <SearchPanel onSearchChange={this.onSearchChange} />
          <TodoList
            todos={visibleItem}
            onDone={this.onToggleDone}
            onImportant={this.onToggleImportant}
            onDelete={this.deleteItem}
          />
        </main>
        <footer className={'app__footer'}>
          <AddItem onAdd={this.addItem}/>
        </footer>
      </div>
    );
  }
}
