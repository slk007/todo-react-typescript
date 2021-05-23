type Todo = {
  text: string;
  completed: boolean;
};

type toggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;
