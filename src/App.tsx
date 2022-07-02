import React, {useState} from 'react';
import { v1 } from 'uuid';
import './App.css';
import { FilterValueType, TaskType, TodolistType } from './types/interfaces';
import {Todolist} from "./Todolist/Todolist";

function App() {

   const [tasks, setTasks] = useState([
       {id: v1(), title: 'HTML&CSS', isDone: true},
       {id: v1(), title: 'JS', isDone: false},
       {id: v1(), title: 'React', isDone: false},
       {id: v1(), title: 'Rest API', isDone: false},
       {id: v1(), title: 'GraphQL', isDone: false},
   ]); 

   const todosType: TodolistType[] = [
    {id: v1(), title: "What to learn", filter: 'all'},
    {id: v1(), title: "What to read", filter: 'active'},
    {id: v1(), title: "What to watch", filter: 'completed'},
   ]

   const [todolists] = React.useState<TodolistType[]>(todosType);

    const changeFilter = (value: FilterValueType) => {
        // setFilter(value);
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

    const changeTaskStatus = (id: string, isDone: boolean) => {
        const newTask = tasks.map((t) => t.id === id ? {...t, isDone} : t);
        setTasks(newTask);
    }

    return (
        <div className="App">
        {
            
            todolists.map((t: TodolistType) => {

                let tasksForTodolist = tasks;
                if (t.filter === 'active') {
                    tasksForTodolist = tasks.filter((t) => !t.isDone);
                }

                if (t.filter === 'completed') {
                    tasksForTodolist = tasks.filter((t) => t.isDone);
                }

                return <Todolist
                    addTask={addTask}
                    title={t.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    changeTaskStatus={changeTaskStatus}
                    activePanel={t.filter}
                ></Todolist>
            })
        }
        </div>
    )
}

export default App;
