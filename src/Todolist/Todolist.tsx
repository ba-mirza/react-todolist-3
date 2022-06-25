import React, { ChangeEvent } from "react";
import { PropsType, TaskType } from "../interfaces";

export function Todolist(props: PropsType) {

    const { 
        title,
        tasks,
        removeTask,
        changeFilter,
        changeTaskStatus,
        addTask,
        activePanel,
    } = props;

    const [text, setTitle] = React.useState("");
    const [error, setError] = React.useState("");


    const addTask$ = () => {
        if(!text.trim()) {
            setError("YOU ARE NOT ENTERED INPUT!");
        } else {
            addTask(text);
            setTitle('');
        }
    }

    const changeInputHandler$ = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
        setError("");
    }

    const changeTaskStatus$ = (id: string, e: ChangeEvent<HTMLInputElement>) => {
        let isDoneValue = e.target.checked;
        changeTaskStatus(id, isDoneValue);
    }

    const filterAll$ = () => changeFilter('all');
    const filterActive$ = () => changeFilter('active');
    const filterCompleted$ = () => changeFilter('completed');

    return <div>
        <h3>{title}</h3>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <input value={text} onChange={changeInputHandler$} type="text"/>
            <span style={{color: 'red'}}>{error}</span>
            <button onClick={addTask$}>Add item</button>
        </div>
        <ul>
            {
                tasks.map((t: TaskType) => <li key={t.id} className={t.isDone ? 'pd done' : 'pd'}>
                    <input type="checkbox" onChange={(e) => changeTaskStatus$(t.id, e)} checked={t.isDone}/><span>{t.title}</span>
                    <button className="btnRemove" onClick={() => removeTask(t.id)}>remove</button>
                </li>)
            }
        </ul>
        <div>
            <button className={activePanel === 'all' ? 'active-panel' : ''} onClick={filterAll$}>All</button>
            <button className={activePanel === 'active' ? 'active-panel' : ''} onClick={filterActive$}>Active</button>
            <button className={activePanel === 'completed' ? 'active-panel' : ''} onClick={filterCompleted$}>Completed</button>
        </div>
    </div>
}
