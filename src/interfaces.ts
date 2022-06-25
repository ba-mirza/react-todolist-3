export type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
  changeFilter: (value: FilterValueType) => void;
};

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type FilterValueType = "all" | "active" | "completed";
