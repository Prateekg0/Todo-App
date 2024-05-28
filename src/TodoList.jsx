import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css'


export default function TodoList(){
let [todos, setTodos]= useState([{task: "Sample Task",id: uuidv4(),isDone:false}]);
let [newTodo,setNewTodo]=useState("");

 let addNewTask = () =>{
    setTodos((preTodos)=>{
        return ([...todos,{task: newTodo, id:uuidv4(), isDone:false}]);
    });
    setNewTodo("");
 };
 let updateTodoValue = (event)=>{
    setNewTodo(event.target.value);
 };
 let deleteTodo=(id)=>{
   setTodos(todos.filter((todo)=> todo.id !=id)); 
 };
 let upperCaseAll=()=>{
   setTodos((preTodos)=>(
    preTodos.map((todo)=>{
        return{
            ...todo,
            task: todo.task.toUpperCase(),
        };
       })
    )
   
   )
 };
 let markAsDone=(id)=>{
    setTodos((preTodos)=>(
        preTodos.map((todo)=>{
            if(todo.id==id){
                return{
                    ...todo,
                    isDone:true,
                };
            }else{
                return todo;
            }
            
           })
        )
       
       )

 }

    return(
        <div className="todo-box">
        <div className="row"><input placeholder="add new task" value={newTodo}  onChange={updateTodoValue} />
        <button className="new-task-btn" onClick={addNewTask}>Add New Task</button></div>
        <br />
        <b></b>
        <br />
        <hr />
        <h4>Tasks Todo</h4>
        <ol>
            {todos.map((todo)=>(
                
                <li key={todo.id}>
                     <button onClick={()=>markAsDone(todo.id)}><i class="fa-solid fa-circle-check"></i></button>
                    &nbsp; &nbsp; &nbsp;<span style={todo.isDone?{textDecoration:"line-through"}:{}}> {todo.task}</span>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                 <button onClick={()=>deleteTodo(todo.id)}><i class="fa-solid fa-xmark"></i></button>
                 
                 
                </li>
            ))}
        </ol>
        <button onClick={upperCaseAll}><i class="fa-solid fa-circle-check"></i>&nbsp;All Marks As Done</button>
        </div>

    );
}