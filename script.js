let btnAdd = document.querySelector('.btn-add');
let inputTarefa = document.querySelector('#inputTarefa');
let listaTarefa = document.querySelector('.tarefas-adicionadas ul')

let contador = document.querySelector('.contador')

btnAdd.addEventListener('click', addTarefa)

function addTarefa () {
    let tarefa = inputTarefa.value;

    if(tarefa){
        let novaTarefa = document.createElement('li');   
        novaTarefa.innerHTML = `<input type="checkbox"> ${tarefa}`;

        novaTarefa.querySelector("input[type=checkbox]").addEventListener("click",function(){
            this.parentNode.classList.toggle("tarefaConcluida")
        });

         listaTarefa.append(novaTarefa);
         inputTarefa.value = "";
    } else {
        alert('Adiciona uma tarefa.')
    }
}

inputTarefa.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        addTarefa();
    }
});