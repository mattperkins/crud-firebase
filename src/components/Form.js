import React from 'react'

class Form extends React.Component {

onChange = ()=>{console.log('input received!')}
onSubmit = (e)=>{
  e.preventDefault()
  console.log(this.refs.text.value)
  
  let text = this.refs.text.value.trim()
  
  if(!text){
    alert('Please enter some text')
    return
  }
  
  this.props.onTodoAdd(text)
  this.refs.text.value = ''
}

render() {

return (
    <div>
  
      <form onSubmit={this.onSubmit}>
        <div>
          <label className="label">Add a reminder</label>
          <input type="text" ref="text" onChange={this.onChange}/>
        </div>
      </form>
    
    </div>
)
}
}
export default Form