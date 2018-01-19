import React from 'react'
import ReactDOM from 'react-dom'

import List from './components/List'
import Form from './components/Form'

class App extends React.Component {
    // initial state
        state = {
            todos: [
                { id: 1, text: '?'},
            ]
        }

    // add list item
    handleOnTodoAdd = (text) => {
        let newTodo = {
            id: this.state.todos.length + 1,
            text: text
        }

        this.setState({
            todos: this.state.todos.concat(newTodo)
        })
    }

    // remove list item
    handleDeleteListItem = (todo) => {
        let todos = this.state.todos
        
        todos.splice(todos.indexOf(todo), 1)

        this.setState({
            todos
        })
    }

    render() {
        return (
            
            <div className="container push-down">
            
            <div className="wrapper">
            <Form onTodoAdd={this.handleOnTodoAdd}/>

            <List todos={this.state.todos} deleteListItem={this.handleDeleteListItem}/>
            </div>

            </div>
            
        )
    }
}


const render = document.getElementById('app')
ReactDOM.render(<App />, render)