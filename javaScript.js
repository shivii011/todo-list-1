// // creating a arrey in which all inputs are stored
const todoButton = document.querySelector(".todo-button");
const newInput=document.querySelector(".new-input");
const todoList =document.querySelector(".todo-list");
// event listners
todoButton.addEventListener("click",addTodo)
//***starline*****/ click anywhere in todolist to wakeup a function 
todoList.addEventListener("click",deleteCheck)
// for (let i=0 ;i<allInputs.length;i++){
//     tooList.innerHTML += "<li>"+allInputs[i=]+"</li>"+"<input type="checkbox">"
// }
// btnNew.addEventListener("click",function(){
//     console.log("button clicked")
//   })   
function addTodo(event){
    // stopping submition
    event.preventDefault();
    const todoDiv=document.createElement("div"); 
    todoDiv.classList.add("todo");

    const newTodo =document.createElement("li");
    // storing in newtodo
     newTodo.innerText= newInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // completed button
    const completedButton=document.createElement("button");
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // trash button
    const trashButton=document.createElement("button");
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton );
    //append to list
    todoList.appendChild(todoDiv); 
    // clearing value of newInput
    newInput.value="";
}
function deleteCheck(e) {
    // to sylect which function is envoke after click
    const item =e.target;
    // delete todo 
    if (item.classList[0]==="trash-btn"){
        const todo =item.parentElement;
        // animation
        todo.classList.add("fall") 
        todo.addEventListener("transitionend",function(){
            todo.remove();
        })
    }  
    // checkmark 
    if  (item.classList[0]==="complete-btn"){
        const todo =item.parentElement;
        // on clicking checkmark class compled is going to run
        todo.classList.toggle("completed");
    }
}
