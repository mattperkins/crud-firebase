import React from 'react'
import ReactDOM from 'react-dom'

import List from './components/List'
import Form from './components/Form'

class App extends React.Component {
        
        state = {
            text: '',
            todos: [
                { id: 1, todo: 'Dont not, Walk the dog'},
                { id: 2, todo: 'Dont not, Walk the cat'},
                { id: 3, todo: 'Dont not, Walk the goldfish'}
            ]
        }

    render() {
        return (
            <div className="masthead pull-up">
                
                <Form />

                <List todos={this.state.todos} />
                
            </div>
        )
    }
}


const render = document.getElementById('app')
ReactDOM.render(<App />, render)