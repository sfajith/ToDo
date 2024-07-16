import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

export function EditTask() {

   const {edit, editTitle, editDesciption, okEdit, cancelEdit} = useContext(TaskContext)
  return (
    <div className={edit}>
      <div className='editcontainer'>
      <h2>Editar Tarea</h2>
      <div className='editinputs'>
      <input type="text"  id='inpute' onChange={(e) =>{editTitle(e)}}/>
      <textarea id='text' onChange={(e) =>{editDesciption(e)}}></textarea>
      </div> 
      <div className='editbuttons'>
      <button className='ok' onClick={() =>{okEdit()}}>Ok</button>
      <button className='delete' onClick={() => {cancelEdit()}}>Cancelar</button>
      </div>
      </div>
    </div>
  )
}

