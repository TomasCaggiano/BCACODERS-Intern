import React from 'react'
import TaskList from './TaskList'

const DayView = ({ tasks, toggleComplete, editTask, removeTask, clearTasks, selectedDate }) => {
    const filteredTasks = tasks.filter(task => task.Date === selectedDate)
  
    return (
    <div>
      <h2>{selectedDate}</h2>
      <TaskList tasks={filteredTasks} toggleComplete={toggleComplete} editTask={editTask} removeTask={removeTask}/>
      <button onClick={()=> clearTasks(selectedDate)}> Clear Task for {selectedDate}</button>
    </div>
  )
}

export default DayView
