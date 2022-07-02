import React, { ChangeEvent } from "react";
import { PropsType, TaskType } from "../types";

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
  const [activeButtons] = React.useState([
    { id: 1, name: "all", class: "active-all" },
    { id: 2, name: "active", class: "active-self" },
    { id: 3, name: "completed", class: "active-completed" },
  ]);

  const addTask$ = () => {
    if (!text.trim()) {
      setError("YOU ARE NOT ENTERED INPUT!");
    } else {
      addTask(text);
      setTitle("");
    }
  };

  const changeInputHandler$ = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setError("");
  };

  const changeTaskStatus$ = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    let isDoneValue = e.target.checked;
    changeTaskStatus(id, isDoneValue);
  };

  const superFilter$ = (type: string, id: number) => {
    switch (type) {
      case "all":
        changeFilter("all");
        break;
      case "active":
        changeFilter("active");
        break;
      case "completed":
        changeFilter("completed");
        break;
    }
  };
  return (
    <div>
      <h3>{title}</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="superInput">
          <input value={text} onChange={changeInputHandler$} type="text" />
        </div>
        <span style={{ color: "red" }}>{error}</span>
        <button onClick={addTask$}>Add item</button>
      </div>
      <ul>
        {tasks.map((t: TaskType) => (
          <li key={t.id} className={t.isDone ? "pd done" : "pd"}>
            <input
              type="checkbox"
              onChange={(e) => changeTaskStatus$(t.id, e)}
              checked={t.isDone}
            />
            <span>{t.title}</span>
            <button className="btnRemove" onClick={() => removeTask(t.id)}>
              remove
            </button>
          </li>
        ))}
      </ul>
      <div>
        {activeButtons.map((b) => {
          return (
            <button
              className={activePanel === b.name ? "active-panel" : ""}
              key={b.id}
              onClick={() => superFilter$(b.name, b.id)}
            >
              {b.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
