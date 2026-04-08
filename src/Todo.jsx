import  { useState }from "react";
import { v4 as uuidv4} from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task:"sample-task" , id: uuidv4(), isDone: false }]);
    let [newTodo ,  setNewTodo] = useState("");
    let addNewTask = () => {
        // console.log("we have to add new task in todo");
        setTodos((prevTodos) => {
            return [...prevTodos , {task : newTodo, id: uuidv4(), isDone: false}];
        });
    };
    let updateTodoValue = (event) =>  {
    setNewTodo(event.target.value);
    };
    let deleteTodo = (id) => {
        // console.log("tasks to be deleted");
       setTodos((prevTodos) =>  todos.filter((prevTodos) => prevTodos.id != id));
    //    console.log(copy);
    };
    let markAllDone = () => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) => {
            return {
                ...todo,
                isDone: true,
            };
        })
    );
    };
    let markAsDone = (id) => {
        setTodos((prevTodos) => 
        prevTodos.map((todo) => {
          if (todo.id == id ) {
           return{
            ...todo, 
            isDone: true,

            };
          } else {
            return todo;
          }
            
        }))
    }


    return (
    <div className="own_csscd" >
        <input type="text" 
        placeholder="add a Task" 
        value={newTodo}
         onChange={updateTodoValue}/>
          <br />
        <button onClick={addNewTask}>Add Task</button>
        <br /><br /><br /><br />
        <hr />
        <h4>Todo List</h4>
        <ul>
            {
                todos.map((todo) => (
                     <li key={todo.id}>
                         <span style={todo.isDone ?{ textDecorationLine: "line-through"} : {}}>
                        {todo.task}</span>
                     <button onClick={() => deleteTodo(todo.id)}>delete</button>
                     <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                     </li>
                ))
            }
        </ul>
        <br/><br/>
        <button onClick={markAllDone}>Mark All As Done</button>
    </div>
  )
}