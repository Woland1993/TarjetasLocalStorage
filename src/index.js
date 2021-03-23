//Por defecto busca el archivo index.js
import { Todo, TodoList } from './classes';
import { crearTodohtml } from './js/componentes';
import './styles.css';
export var todoList = new TodoList();
todoList.todos.forEach(i => {
    crearTodohtml(i);
});