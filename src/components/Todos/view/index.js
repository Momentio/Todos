import React, { Component } from 'react';
import Todo from "./Todo";
import "./styles/index.css";

class Todos extends Component {
  constructor(props){
    super(props);
  };

  add = () => {
    this.props.dispatch(
      this.props.model.gPush(
        this.props.model.gKey,
        this.props.model.gStructure[0]
      )
    );
  }

  sort = () => {
    this.props.dispatch(
      this.props.model.gSort(
        this.props.model.gKey,
        (a, b) => {
          if(a.isActived && !b.isActived) return -1;
          if(a.isActived && b.isActived) return 0;
          if(!a.isActived && b.isActived) return 1;
        }
      )
    );
  }

  filter = () => {
    this.props.dispatch(
      this.props.model.gFilter(
        this.props.model.gKey,
        (e) => e.isActived
      )
    );
  }
  
  render() {
    return (
      <section className="todos">
        <div className="todos__header">
          <h1>Типа дела</h1>
        </div>
        <div className="todos__toolbar">
          <button onClick={this.add}>Добавить</button>
          <button onClick={this.sort}>Сортировать</button>
          <button onClick={this.filter}>Удалить завершенные</button>
        </div>
        <ul className="todos__list">
          {
            this.props.model.gValue.map((todo, i) => {
              return (
                <Todo {...this.props} model={this.props.model[i]} key={i} />
              );
            })
          }
        </ul>
      </section>
    );
  }
}

export default Todos;