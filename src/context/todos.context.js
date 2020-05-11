// all methods to interact w/ todos
import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
  { id: 1, task: "Buy dog food", completed: false },
  { id: 2, task: "Wash clothes", completed: false },
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const todoStuff = useTodoState(defaultTodos);

  return (
    <TodosContext.Provider value={todoStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}
