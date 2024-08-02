import React from 'react'
import TaskList from './TaskList'

const WeekView = ({ tasks, toggleComplete, editTask, removeTask, clearTasks }) => {
  
  const startOfWeek = new Date()
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(endOfWeek.getDate()+6);

  const filteredTasks = tasks.filter(task =>{
    const taskDate = new Date(task.date);
    return taskDate >= startOfWeek && taskDate <= endOfWeek;
  })
  
  const clearWeekTasks = ()=>{
    tasks.forEach(task => {
        const taskDate = new Date(task.date);
        if (taskDate >= startOfWeek && taskDate <= endOfWeek) {
            removeTask(task.id)
        } 
    });
  }
    return (
    <div>
      <h2>Tasks for the week</h2>
      <TaskList tasks={filteredTasks} toggleComplete={toggleComplete} editTask={editTask} removeTask={removeTask} />
      <button onClick={clearWeekTasks}> clear week tasks</button>
    </div>
  )
}

export default WeekView
