import React, {useState} from 'react';
import { v1 } from 'uuid';
import './App.css';
import { FilterValueType, TaskType } from './interfaces';
import {Todolist} from "./Todolist/Todolist";

function App() {

   const [tasks, setTasks] = useState([
       {id: v1(), title: 'HTML&CSS', isDone: true},
       {id: v1(), title: 'JS', isDone: false},
       {id: v1(), title: 'React', isDone: false},
       {id: v1(), title: 'Rest API', isDone: false},
       {id: v1(), title: 'GraphQL', isDone: false},
   ]);

    const [filter, setFilter] = useState<FilterValueType>('all');

    let tasksForTodolist = tasks;
    if (filter === 'active') {
        tasksForTodolist = tasks.filter((t) => !t.isDone);
    }

    if (filter === 'completed') {
        tasksForTodolist = tasks.filter((t) => t.isDone);
    }

    const changeFilter = (value: FilterValueType) => {
        setFilter(value);
    }

    const removeTask = (id: string) => {
       const filteredTasks = tasks.filter((t) => t.id !== id);
       setTasks(filteredTasks);
    }

    const addTask = (title: string) => {
        const task: TaskType = {id: v1(), title, isDone: false};
        const newTask = [...tasks, task];
        setTasks(newTask);
    }

    return (
        <div className="App">
            <Todolist
                addTask={addTask}
                title="What to learn?"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
            ></Todolist>
        </div>
    )
}

export default App;
