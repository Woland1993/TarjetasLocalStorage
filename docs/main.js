/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://prueba/./src/styles.css?");

/***/ }),

/***/ "./src/classes/index.js":
/*!******************************!*\
  !*** ./src/classes/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* reexport safe */ _todo_class_js__WEBPACK_IMPORTED_MODULE_0__.Todo),\n/* harmony export */   \"TodoList\": () => (/* reexport safe */ _todo_list_class_js__WEBPACK_IMPORTED_MODULE_1__.TodoList)\n/* harmony export */ });\n/* harmony import */ var _todo_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.class.js */ \"./src/classes/todo.class.js\");\n/* harmony import */ var _todo_list_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list.class.js */ \"./src/classes/todo-list.class.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://prueba/./src/classes/index.js?");

/***/ }),

/***/ "./src/classes/todo-list.class.js":
/*!****************************************!*\
  !*** ./src/classes/todo-list.class.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoList\": () => (/* binding */ TodoList)\n/* harmony export */ });\nclass TodoList {\r\n\r\n    constructor() {\r\n        this.todos = [];\r\n        this.cargarLocalStorage();\r\n    }\r\n\r\n    nuevoTodo(todo) {\r\n        this.todos.push(todo);\r\n        this.guardarLocalStorage();\r\n    }\r\n\r\n    eliminarTodo(id) {\r\n        this.todos = this.todos.filter(todo => todo.id != id)\r\n        this.guardarLocalStorage();\r\n    }\r\n\r\n    //Mejorar \r\n    marcarCompletado(id) {\r\n\r\n        for (let todo of this.todos) {\r\n            if (todo.id == id) {\r\n                todo.completado = !todo.completado;\r\n                this.guardarLocalStorage();\r\n                break;\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    eliminarCompletados() {\r\n        this.todos = this.todos.filter(todo => todo.completado);\r\n        this.guardarLocalStorage();\r\n    }\r\n\r\n    guardarLocalStorage() {\r\n        localStorage.setItem('todo', JSON.stringify(this.todos));\r\n    }\r\n\r\n    cargarLocalStorage() {\r\n        this.todos =\r\n            localStorage.getItem('todo') ?\r\n            JSON.parse(localStorage.getItem('todo')) : this.todos = []\r\n    }\r\n}\n\n//# sourceURL=webpack://prueba/./src/classes/todo-list.class.js?");

/***/ }),

/***/ "./src/classes/todo.class.js":
/*!***********************************!*\
  !*** ./src/classes/todo.class.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\r\n\r\n    constructor(tarea) {\r\n        this.tarea = tarea;\r\n        this.id = new Date().getTime();\r\n        this.completado = false;\r\n        this.creado = new Date();\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://prueba/./src/classes/todo.class.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoList\": () => (/* binding */ todoList)\n/* harmony export */ });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ \"./src/classes/index.js\");\n/* harmony import */ var _js_componentes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/componentes */ \"./src/js/componentes.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n//Por defecto busca el archivo index.js\r\n\r\n\r\n\r\nvar todoList = new _classes__WEBPACK_IMPORTED_MODULE_0__.TodoList();\r\ntodoList.todos.forEach(i => {\r\n    (0,_js_componentes__WEBPACK_IMPORTED_MODULE_1__.crearTodohtml)(i);\r\n});\n\n//# sourceURL=webpack://prueba/./src/index.js?");

/***/ }),

/***/ "./src/js/componentes.js":
/*!*******************************!*\
  !*** ./src/js/componentes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crearTodohtml\": () => (/* binding */ crearTodohtml)\n/* harmony export */ });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes */ \"./src/classes/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\r\n\r\nconst divTodoList = document.querySelector('.todo-list');\r\nconst txtImput = document.querySelector('.new-todo');\r\nconst btnBorrar = document.querySelector('.clear-completed');\r\nconst ulfiltros = document.querySelector(\".filters\");\r\nconst anchorfiltros = document.querySelectorAll(\".filters\");\r\n\r\nconst crearTodohtml = (todo) => {\r\n    const htmlTodo = `\r\n<li class=\"${todo.completado ?'completed':''}\" data-id=\"${todo.id}\">\r\n    <div class=\"view\">\r\n        <input class=\"toggle\" type=\"checkbox\" ${todo.completado&&'checked'}>\r\n        <label>${todo.tarea}</label>\r\n        <button class=\"destroy\"></button>\r\n    </div>\r\n    <input class=\"edit\" value=\"Create a TodoMVC template\">\r\n</li>`\r\n    const div = document.createElement('div');\r\n    div.innerHTML = htmlTodo\r\n    divTodoList.append(div.firstElementChild);\r\n    return div;\r\n}\r\n\r\n//Eventos\r\ntxtImput.addEventListener('keyup', (event) => {\r\n    if (event.keyCode === 13 && txtImput.value.trim().length) {\r\n        const nuevoTodo = new _classes__WEBPACK_IMPORTED_MODULE_0__.Todo(txtImput.value);\r\n        _index__WEBPACK_IMPORTED_MODULE_1__.todoList.nuevoTodo(nuevoTodo);\r\n        crearTodohtml(nuevoTodo);\r\n        txtImput.value = '';\r\n    }\r\n});\r\n\r\ndivTodoList.addEventListener('click', e => {\r\n    const nombreElemento = e.target.localName;\r\n    const todoElement = e.target.parentElement.parentElement;\r\n    const todoId = todoElement.getAttribute('data-id');\r\n    if (nombreElemento.includes('input')) {\r\n        _index__WEBPACK_IMPORTED_MODULE_1__.todoList.marcarCompletado(todoId);\r\n        todoElement.classList.toggle('completed');\r\n    } else if (nombreElemento.includes('button')) {\r\n        _index__WEBPACK_IMPORTED_MODULE_1__.todoList.eliminarTodo(todoId);\r\n        divTodoList.removeChild(todoElement);\r\n    }\r\n});\r\n\r\n\r\nbtnBorrar.addEventListener('click', e => {\r\n    _index__WEBPACK_IMPORTED_MODULE_1__.todoList.eliminarCompletados();\r\n    for (let i = divTodoList.children.length - 1; i >= 0; i--) {\r\n        const elemento = divTodoList.children[i];\r\n        if (elemento.classList.contains('completed')) {\r\n            divTodoList.removeChild(elemento);\r\n        }\r\n    }\r\n});\r\n\r\nulfiltros.addEventListener('click', eve => {\r\n\r\n    const filtro = eve.target.text;\r\n    if (!filtro) { return; }\r\n    anchorfiltros.forEach(elem => elem.classList.remove('selected'));\r\n    eve.target.classList.add('selected');\r\n    for (let elemento of divTodoList.children) {\r\n        elemento.classList.remove('hidden');\r\n        const completado = elemento.classList.contains('completed');\r\n        switch (filtro) {\r\n            case 'Pendientes':\r\n                if (completado) {\r\n                    elemento.classList.add('hidden');\r\n                }\r\n                break;\r\n            case 'Completados':\r\n                if (!completado) {\r\n                    elemento.classList.add('hidden');\r\n                }\r\n                break;\r\n        }\r\n    }\r\n});\n\n//# sourceURL=webpack://prueba/./src/js/componentes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;