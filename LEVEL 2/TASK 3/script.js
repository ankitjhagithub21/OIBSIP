const myForm = document.getElementById('myForm')
const userInput = document.getElementById('userInput')
const todoList = document.getElementById('todoList')
const menu = document.getElementById('menu')
const menuBtn = document.getElementById('menuBtn')

const todos = JSON.parse(localStorage.getItem('todos')) || []


myForm.addEventListener('submit', (e) => {

    e.preventDefault()
    addTodo(userInput.value)
    userInput.value = ""
})

const addTodo = (todo) => {
    todos.push(todo)
    updateLs()
}

const updateLs = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
    displayTodo()
}

const displayTodo = () => {
    if (todos.length == 0) {
        todoList.innerHTML = `<p class="msg">Todo List is Empty!</p>`
    } else {
        todoList.innerHTML = "<h4>Pending Task</h4>"

        todos.map((todo, index) => {
            let div = document.createElement('div');

            div.classList.add('todo')
            div.innerHTML = `
           
            <span>${todo} </span>
           
            <div>
            <button class="edit-btn btn"><i class="fas fa-edit"></i></button>
            <button class="remove-btn btn"><i class="fas fa-trash"></i></button>
           
            <button class="check-btn btn"><i class="fas fa-check"></i></button>
            </div>
            
            `
            todoList.appendChild(div)
            div.querySelector('.remove-btn').addEventListener('click', () => {
                todos.splice(index, 1);
                updateLs()

            })
            div.querySelector('.edit-btn').addEventListener('click', () => {

                let res = prompt("Update Todo", todo)
                if (res != null) {
                    editTask(res, index)
                }

            })
            div.querySelector('.check-btn').addEventListener('click', () => {

                todos.splice(index, 1);
                updateLs()
                let completedTask = document.createElement('p')
                completedTask.classList.add('completed-task')
                completedTask.innerHTML = todo 
                menu.appendChild(completedTask)

            })


        })
    }
}
const editTask = (res, index) => {
    todos[index] = res;
    updateLs()
}

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    if (menu.classList.contains('active')) {
        menuBtn.classList.replace('fa-bars', 'fa-xmark')
    } else {
        menuBtn.classList.replace('fa-xmark', 'fa-bars')
    }
})


displayTodo()