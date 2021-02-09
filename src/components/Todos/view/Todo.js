import React, { PureComponent } from 'react';

class Todo extends PureComponent {
  constructor(props){
    super(props);
  };

  toggle = (model) => {console.log(model);
    this.props.dispatch(
      model.gToggle(
        model.gKey
      )
    );
  }

  update = (model, value) => {
    this.props.dispatch(
        model.gUpdate(
            model.gKey,
            value
        )
    );
  }

  drop = () => {
    this.props.dispatch(
      this.props.model.gDrop(
        this.props.model.gKey
      )
    );
  }
  
  render() {
    if(!this.props.model) return false;

    let value = this.props.model.gValue;

    if(value.isEditing){
        return (
            <li className="todo">
                <div className="todo__header">
                <button onClick={
                    (e) => {this.toggle(this.props.model.isEditing)}
                }>Отмена</button>
                <button onClick={
                    (e) => {this.toggle(this.props.model.isEditing)}
                }>Готово</button>
                </div>
                <hr/>
                <input type="text" value={value.title} onChange={
                    (e) => {this.update(this.props.model.title, e.target.value)}
                }/>
                <textarea value={value.description} onChange={
                    (e) => {this.update(this.props.model.description, e.target.value)}
                }/>
            </li>
        );
    }

    return (
        <li className="todo">
            <div className="todo__header">
                <button onClick={
                    (e) => {this.toggle(this.props.model.isEditing)}
                }>Редактировать</button>
                <button onClick={this.drop}>Удалить</button>
            </div>
            <hr/>
            <h4 onClick={(e) => {this.toggle(this.props.model.isActived)}}
                className={
                    value.isActived ? "todo__title todo__title--actived" : "todo__title"
                }
            >{value.title}</h4>
            <p>{value.description}</p>
        </li>
    );
  }
}

export default Todo;