import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'


function TaksForm() {

  const {titleHandler, descriptionHandler, addTaskHanlder} = useContext(TaskContext)

  return (
    <div className='form'>
    <form id="myForm" className='myform'>
      <input type="text" 
        placeholder="¿Que vas a hacer?"
        onChange={(e) =>{titleHandler(e)}}
      />
      <textarea
        placeholder="¿Como lo vas a hacer?"
        onChange={(e)=>{descriptionHandler(e)}}
      ></textarea>
      <button onClick={(e)=>{addTaskHanlder(e)}}>Añadir Tarea</button>
    </form>
    </div>
  )
}

export default TaksForm
