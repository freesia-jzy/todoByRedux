

import React from 'react';


class AppComponent extends React.Component {
  constructor(props){
    super(props);
    this._handleAdd=this._handleAdd.bind(this);
  }
  _handleAdd(){
    let text=this.refs.text.value;
    this.props.actions.addTodo(text);
  }

  render() {
    console.log(this.props);
    return (
      <div className="index">
      <input type="text" ref="text"/>
      <button onClick={this._handleAdd}>添加</button>
    <div className="list">
      <ul>
        {
          this.props.todos.map((todo,index)=>
          <li key={index} onClick={()=>this.props.actions.deleteTodo(index)}>
            {todo}
          </li>
        )
        }
      </ul>
      </div>
      <button onClick={()=>this.props.actions.deleteAll()}>清空</button>
    </div>
  );
  }
}


export default AppComponent;
