import React, { ChangeEvent } from "react";
import { PropsType, TaskType } from "../interfaces";

export function Todolist(props: PropsType) {

    const {title, tasks, removeTask, changeFilter, addTask} = props;

    const [text, setTitle] = React.useState("");

    const addTask$ = () => {
        if(!text.length) {
            return;
        }
        addTask(text);
        setTitle('');
    }

    const changeInputHandler$ = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const filterAll$ = () => changeFilter('all');
    const filterActive$ = () => changeFilter('active');
    const filterCompleted$ = () => changeFilter('completed');

    return <div>
        <h3>{title}</h3>
        <div>
            <input value={text} onChange={changeInputHandler$} type="text"/>
            <button onClick={addTask$}>Add item</button>
        </div>
        <ul>
            {
                tasks.map((t: TaskType) => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/><span>{t.title}</span>
                    <button onClick={() => removeTask(t.id)}>remove</button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={filterAll$}>All</button>
            <button onClick={filterActive$}>Active</button>
            <button onClick={filterCompleted$}>Completed</button>
        </div>
    </div>
}
