import React from 'react'
import { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import DayView from './DayView';
import WeekView from './WeekView';
import MonthView from './MonthView';

 const Home = () =>{
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [view, setView] = useState('day'); // Estado para gestionar la vista (día, semana, mes)

  // Cargar tareas desde localStorage 
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Guardar tareas en localStorage 
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    setEditingTask(null);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const clearTasks = (date) => {
    setTasks(tasks.filter(task => task.date !== date));
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <h1>TO-DO List App</h1>
      <TaskForm addTask={addTask} editTask={editTask} editingTask={editingTask} />
      
      <div>
        <button onClick={() => setView('day')}>Day View</button>
        <button onClick={() => setView('week')}>Week View</button>
        <button onClick={() => setView('month')}>Month View</button>
        <button onClick={clearAllTasks}>Clear All Tasks</button>
      </div>

      {view === 'day' && (
        <DayView
          tasks={tasks}
          toggleComplete={toggleComplete}
          editTask={setEditingTask}
          removeTask={removeTask}
          clearTasks={clearTasks}
          selectedDate={today}
        />
      )}
      {view === 'week' && (
        <WeekView
          tasks={tasks}
          toggleComplete={toggleComplete}
          editTask={setEditingTask}
          removeTask={removeTask}
          clearTasks={clearTasks}
        />
      )}
      {view === 'month' && (
        <MonthView
          tasks={tasks}
          toggleComplete={toggleComplete}
          editTask={setEditingTask}
          removeTask={removeTask}
          clearTasks={clearTasks}
        />
      )}
    </div>
  );
};

 export default Home