export enum Filter {
  All = "all",
  Open = "open",
  Completed = "completed",
}

export type Todo = {
  id: string;
  title: string;
  isCompleted: boolean;
}

export type State = {
  filter: Filter;
  isLoading: boolean;
  searchText: string;
  todos: Todo[];
  visibleTodos: Todo[];
};
