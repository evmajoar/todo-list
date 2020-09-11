import React, {Component} from 'react';
import './AddItem.scss';

export default class AddItem extends Component {
  state = {
    label: ''
  }

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.state.label ? this.props.onAdd(this.state.label) : false;
    this.setState({
      label: ''
    });
  }

  render() {
    const mainClassName = 'add-item';

    return(
      <form className={mainClassName} onSubmit={this.onSubmit}>
        <input className={`${mainClassName}__input`} type="text" placeholder={'Добавить пункт'}
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button className={`${mainClassName}__button`}>
          <i className="fa fa-plus" aria-hidden="true"/>
        </button>
      </form>
    );
  }
}
