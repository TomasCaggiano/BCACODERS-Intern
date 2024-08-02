import React from 'react'
import { useState, useEffect } from 'react'


const TaskForm = ({ addTask, editTask, editingTask }) => {
    const [task, setTask] = useState('');
    const [date, setDate] = useState('')

    useEffect(() => {
        if (editingTask) {
            setTask(editingTask.task);
            setDate(editingTask.date);
        }
    }, [editingTask])

    const submit = (e) => {
        e.preventDefault();
        if (task && date) {
            if (editingTask) {
                editTask({ ...editingTask, task, date });
            } else {
                addTask({ task, date, id: Date.now(), completed: false });
            }
            setTask('');
            setDate('');
        }
    }
        return ( <div>
            <form onSubmit={submit}>
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value) } required/>
            <input type="date" value={date} onChange={(e)=>setDate(e.target.value) } required/>
            <button type="submit">{editingTask ? 'Edit task' : 'Add task'}</button>
           </form>
            </div>
        )
}

export default TaskForm;