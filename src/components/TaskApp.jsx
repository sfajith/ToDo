
import { EditTask } from './EditTask'
import TaksForm from './TaksForm'
import {TaskList} from './TaskList'


 function TaskApp() {

  return (
    <div>
      <h1>Todo app</h1>
      <TaksForm ></TaksForm>
      <TaskList></TaskList>
      <EditTask></EditTask>
    </div>
  )
}

export default TaskApp