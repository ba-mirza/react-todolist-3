export type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
  changeFilter: (value: FilterValueType) => void;
  changeTaskStatus: (id: string, isDone: boolean) => void;
  activePanel: string;
};

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type FilterValueType = "all" | "active" | "completed";

export type TodolistType = {
  id: string;
  title: string;
  filter: string;
};
