import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, toggleComplete, editTask, removeTask}) => {
  return (
    <div>
      <ul>
        {tasks.map((task)=>(
            <TaskItem key={task.id} task={task} toggleComplete={toggleComplete} editTask={editTask} removeTask={removeTask}/>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
