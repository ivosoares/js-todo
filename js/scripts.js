let todoItems = [];

// funcao adiciona todo
function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    }

    todoItems.push(todo);
    console.log('LISTA - ', todoItems);

    // Referencia ul no html
    const list = document.querySelector('.js-todo-list');
    list.insertAdjacentHTML('beforeend', `
        <li class="todo-item" data-key="${todo.id}">
            <span>${todo.text}</span>
            <button class="delete-todo js-delete-todo">
                <svg>
                    <use href="#delete-icon"></use>
                </svg>
            </button>
        </li>
    `)
}

// verifica evento formulario e valor input
const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('.js-todo-input');

    var text = input.value.trim();
    if(text !== '') {
        addTodo(text);
        input.value = '';
        input.focus();
    }
})

// 
