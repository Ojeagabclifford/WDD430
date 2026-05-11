import { TodoItems } from "./TodoItems"

export function TodoList({todos, toggleTodo, deleteTodo})
{
    return ( <ul className="list">
    {todos.length === 0 && "No todo"}
    {todos.map(todo => {
        return(<TodoItems {...todo} deleteTodo ={deleteTodo}  toggleTodo ={toggleTodo} key={todo.id} />)
    })}
   

  </ul>)
}