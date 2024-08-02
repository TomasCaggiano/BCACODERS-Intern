import React from 'react'

const TaskItem = ({ task, toggleComplete, editTask, removeTask}) => {
  return (
    <div>
      <li>
        <input type='checkbox' checked={task.completed} onChange={()=>toggleComplete(tank.id)} />
        <span style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
            {task.task} - {task.date}
        </span>
        <button onClick={()=>editTask(task)}>Edit</button>
        <button onClick={()=>removeTask(task.id)}>Delete</button>
      </li>
    </div>
  )
}

export default TaskItem
