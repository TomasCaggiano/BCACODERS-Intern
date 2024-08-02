import React from 'react';
import TaskList from './TaskList';

const MonthView = ({ tasks, toggleComplete, editTask, removeTask, clearTasks }) => {
  // filtrar tareas del mes actual
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const filteredTasks = tasks.filter(task => {
    const taskDate = new Date(task.date);
    return taskDate.getMonth() === currentMonth && taskDate.getFullYear() === currentYear;
  });

  const clearMonthTasks = () => {
    tasks.forEach(task => {
      const taskDate = new Date(task.date);
      if (taskDate.getMonth() === currentMonth && taskDate.getFullYear() === currentYear) {
        removeTask(task.id);
      }
    });
  };

  return (
    <div>
      <h2>Tasks for the Month</h2>
      <TaskList tasks={filteredTasks} toggleComplete={toggleComplete} editTask={editTask} removeTask={removeTask} />
      <button onClick={clearMonthTasks}>Clear Month Tasks</button>
    </div>
  );
};

export default MonthView;