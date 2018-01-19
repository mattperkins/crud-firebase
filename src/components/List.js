import React from 'react'
class List extends React.Component {

onDelete = (todo)=>{
    this.props.deleteListItem(todo)
  }

render() {

return (
    <div>
        <ul className="todo-list-group">
  {
    this.props.todos.map( todo => {
        return <li
        className="todo-list-items" 
          todo={todo} 
            key={todo.id}
              onClick={this.onDelete}>
                {todo.text}
                <div><span className="delete-icon">x</span></div>
        </li>
      }
    )
  }
  </ul>
    </div>
)
}
}
export default List
