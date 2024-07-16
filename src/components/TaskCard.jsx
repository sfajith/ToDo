import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
import { EditTask } from './EditTask'




export function TaskCard() {

  const {fullData, deleteTaskHandler, editTaskHandler, editTitle} = useContext(TaskContext)
  

  return (
    <div className='card-container'>
      { fullData.length == 0 ? <h3>No hay tareas, añade una.</h3> :
        fullData.map((task, index)=>
            <div className='card' key={index}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <div className='cardbuttons'>
                <button className='editbutton' onClick={()=>{editTaskHandler(index)}}>Editar Tarea</button>
                <button className='delete' onClick={()=>{deleteTaskHandler(index)}}>Eliminar Tarea</button>
                </div>
            </div>
        )
      }
    </div>
  )
}


