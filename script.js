const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(tasksParameter){
  const ul = document.querySelector("ul")

  ul.innerHTML = ""
  
  for(let i=0; i<tasksParameter.length; i++){
    const newElement = createTaskItem(tasksParameter[i])
    ul.appendChild(newElement)
  }
  return ul
}
renderElements(tasks)

function createTaskItem (objectTasks){
  const liElement = document.createElement("li")
  const divElement = document.createElement("div")
  const spanElement = document.createElement("span")
  const pElement = document.createElement("p")
  const buttonElement = document.createElement("button") 

  liElement.append(divElement, buttonElement)
  divElement.append(spanElement, pElement)

  liElement.classList.add("task__item")

  divElement.classList.add("task-info__container")

  spanElement.classList.add("task-type")
    if(objectTasks.type === "Urgente"){
      spanElement.classList.add("span-urgent")
    }
    else if(objectTasks.type === "Importante"){
      spanElement.classList.add("span-important")
    }
    else if(objectTasks.type === "Normal"){
      spanElement.classList.add("span-normal")
    }

  pElement.innerText = objectTasks.title

  buttonElement.classList.add("task__button--remove-task")

  buttonElement.addEventListener("click", function(){
    const index = tasks.indexOf(objectTasks)
    tasks.splice(index,1)
    renderElements(tasks)
  })

  return liElement
}

function createNewTask(newTaskParameter){
  const form = document.querySelector(".form__container")

  form.addEventListener("submit",function(event){
    event.preventDefault()

    const inputTitle = document.querySelector("#input_title")
    const inputType = document.querySelector(".form__input--priority")

    const newTask = {
      title: inputTitle.value,
      type: inputType.value[0].toUpperCase()+inputType.value.substr(1)}

    newTaskParameter.push(newTask)
    renderElements(newTaskParameter)
  })
}
createNewTask(tasks)
