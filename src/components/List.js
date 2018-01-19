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
              {todo.todo}
        </li>
      }
    )
  }
  </ul>

</div>
)
}
 
