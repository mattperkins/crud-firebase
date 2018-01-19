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
        </li>
      }
    )
  }
  </ul>

</div>
)
}
 
