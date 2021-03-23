import { Todo } from '../classes';
import { todoList } from '../index';
const divTodoList = document.querySelector('.todo-list');
const txtImput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulfiltros = document.querySelector(".filters");
const anchorfiltros = document.querySelectorAll(".filters");

export const crearTodohtml = (todo) => {
    const htmlTodo = `
<li class="${todo.completado ?'completed':''}" data-id="${todo.id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${todo.completado&&'checked'}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li>`
    const div = document.createElement('div');
    div.innerHTML = htmlTodo
    divTodoList.append(div.firstElementChild);
    return div;
}

//Eventos
txtImput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && txtImput.value.trim().length) {
        const nuevoTodo = new Todo(txtImput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodohtml(nuevoTodo);
        txtImput.value = '';
    }
});

divTodoList.addEventListener('click', e => {
    const nombreElemento = e.target.localName;
    const todoElement = e.target.parentElement.parentElement;
    const todoId = todoElement.getAttribute('data-id');
    if (nombreElemento.includes('input')) {
        todoList.marcarCompletado(todoId);
        todoElement.classList.toggle('completed');
    } else if (nombreElemento.includes('button')) {
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElement);
    }
});


btnBorrar.addEventListener('click', e => {
    todoList.eliminarCompletados();
    for (let i = divTodoList.children.length - 1; i >= 0; i--) {
        const elemento = divTodoList.children[i];
        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);
        }
    }
});

ulfiltros.addEventListener('click', eve => {

    const filtro = eve.target.text;
    if (!filtro) { return; }
    anchorfiltros.forEach(elem => elem.classList.remove('selected'));
    eve.target.classList.add('selected');
    for (let elemento of divTodoList.children) {
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');
        switch (filtro) {
            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
                break;
        }
    }
});