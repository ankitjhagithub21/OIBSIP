const myForm = document.getElementById('myForm')
const userInput = document.getElementById('userInput')
const todoList = document.getElementById('todoList')
const todos = JSON.parse(localStorage.getItem('todos')) || []

myForm.addEventListener('submit',(e)=>{

    e.preventDefault()
    addTodo(userInput.value)
    userInput.value=""
})

const addTodo = (todo) =>{
    todos.push(todo)
    updateLs()
}

const updateLs = () =>{
    localStorage.setItem('todos',JSON.stringify(todos))
    displayTodo()
}

const displayTodo = () =>{
    if(todos.length==0){
        todoList.innerHTML = `<p>Todo List is Empty!</p>`
    }else{
        todoList.innerHTML = ""
        todos.map((todo,index)=>{
            let div = document.createElement('div');
            div.classList.add('todo')
            div.innerHTML = `
           
            <p>${todo}</p>
            <button class="remove-btn">X</button>
            
            `
            todoList.appendChild(div)
            div.querySelector('.remove-btn').addEventListener('click',()=>{
                todos.splice(index,1);
               updateLs()
            
            })
            
        })
    }
}
displayTodo()