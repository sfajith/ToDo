import {createContext} from 'react'
import {useState, useEffect} from 'react'
import { task } from '../task'

export const TaskContext = createContext()

export function TaskContextProvider(props) {

  const[titleTask, setTitleTask]= useState('')
  const[descriptionTask, setDescriptionTask]= useState('')
  const[fullData, setFullData] = useState([])
  const[edit, setEdit] = useState('')
  const[index, setIndex] = useState('')
  let editVar;

  useEffect(()=>{
    setFullData(task)
    setEdit('editdisable')
  }, [])

  const titleHandler = (e) =>{
    setTitleTask(e.target.value)
}
const descriptionHandler = (e) =>{
    setDescriptionTask(e.target.value)
}
const addTaskHanlder = (e) =>{
  e.preventDefault()
  if(titleTask.length < 3){
    alert('Debes añadir un titulo mayor a tres caracteres')
  }else{
    setFullData([...fullData, {
      id: fullData.length,
      title: titleTask,
      description: descriptionTask
  }])
  document.getElementById('myForm').reset();
  setTitleTask('')
  setDescriptionTask('')
  }

    
}

const deleteTaskHandler = (index) =>{
  let data = [...fullData]
  data.splice(index, 1)
  setFullData(data)
}

//editar tarea
const editTaskHandler = (index) =>{
  if(edit == 'editdisable'){
    setEdit('editenable')
    document.getElementById('inpute').value = (fullData[index].title)
    document.getElementById('text').value = (fullData[index].description)
    setIndex(index)
  }else{
    setEdit('editdisable')
  }
}

//editar titulo
const editTitle = (e) =>{
 editVar = [...fullData]
editVar[index].title = e.target.value
 // setFullData([...editVar])
}

//editar descripcion
const editDesciption = (e) =>{
  editVar = [...fullData]
  editVar[index].description = e.target.value
  //setFullData([...editVar])
}

const okEdit = () =>{
  setFullData(editVar)
  setEdit('editdisable')
}

const cancelEdit = () =>{
  setEdit('editdisable')
}

  return (
    <TaskContext.Provider value={{
      fullData,
      titleHandler,
      descriptionHandler,
      addTaskHanlder,
      deleteTaskHandler,
      editTaskHandler,
      edit,
      editTitle,
      editDesciption,
      okEdit,
      cancelEdit
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}



