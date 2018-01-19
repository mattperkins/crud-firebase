import React from 'react'
 
export default ({todos}) => {
return (
<div>

  <ul className="todo-list-group">
  {
    todos.map( todo => {
        return <li
        className="todo-list-items" 
          todo={todo} 
            key={todo.id}>
              {todo.text}
                <a href="#" className="add-space-left"><span className="delete-icon">x</span></a>
        </li>
      }
    )
  }
  </ul>

</div>
)
}
 
