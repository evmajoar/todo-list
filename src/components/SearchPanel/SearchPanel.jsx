import React, {Component} from 'react';
import './Search.scss';

export default class SearchPanel extends Component {
  state = {
    term: ''
  }

  onSearchChange = (event) => {
    const term = event.target.value;
    this.setState({term});
    this.props.onSearchChange(term);
  }

  render() {
    return(
      <p className={'search-panel'}>
        <input
          className={'search-panel__input'}
          type="search"
          placeholder="Поиск"
          value={this.state.term}
          onChange={this.onSearchChange}
        />
      </p>
    );
  }
}
