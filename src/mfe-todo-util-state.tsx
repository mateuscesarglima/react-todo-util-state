import { create } from "zustand";
import { combine } from 'zustand/middleware'

export type TaskProperties = {
  id: number;
  title: string;
  completed: boolean;
  description: string;
  tasks: TaskProperties[];
}

export type TaskMethods = {
  addTask: (task: TaskProperties) => void;
  removeTask: (id: number) => void;
}

const store = combine<TaskProperties, TaskMethods>({
  tasks: [],
  completed: false,
  description: '',
  id: 0,
  title: ''
}, (set) => ({
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (id) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
}));


export const useStore = create(store);