import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value: "")

  const focusRef = useRef(null)
  useEffect(() => {
    focusRef.current.focus()
  })

  const handleChange = ev =>{
    setInput(ev.target.value)
  }

  const handleSubmit = ev=> {
    ev.preventDefault();
    
    props.onSubmit({
      id:Math.floor(Math.random()*10000),
       text: input
    })

      setInput("")
  }

  return (
    <form onSubmit = {handleSubmit} className="todo-form" >
      {props.edit ? (
        <>
        <input 
          type="text" 
          placeholder="Update your todo" 
          value={input} 
          name="text" 
          className="todo-input edit"
          onChange = {handleChange}
          ref = {focusRef}
        />
        <button onClick = {handleSubmit} className="todo-button edit">
          Update
          </button>
        </>
        ) : (
          <>
          <input 
            type="text" 
            placeholder="Add a todo" 
            value={input} 
            name="text" 
            className="todo-input"
            onChange = {handleChange}
            ref = {focusRef}
          />
          <button onClick = {handleSubmit} className="todo-button">
            Add todo
          </button>
          </>
      )}
    </form>
  )
}
export default TodoForm
