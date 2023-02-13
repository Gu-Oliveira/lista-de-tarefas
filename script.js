let btnAdd = document.querySelector('.btn-add');
let inputTarefa = document.querySelector('#inputTarefa');
let listaTarefa = document.querySelector('.tarefas-adicionadas ul')

let contador = document.querySelector('.contador')

let idTarefa = 1

btnAdd.addEventListener('click', addTarefa)

function addTarefa () {
    let tarefa = inputTarefa.value;

    if(tarefa){
        let novaTarefa = document.createElement('li');  
        novaTarefa.id = `tarefa-${idTarefa}`
        novaTarefa.innerHTML =
         `<input type="checkbox">
         <div class="container-tarefa">
         <div class="tarefa">${tarefa}</div> <div class="remover">X</div>
         </div>`;

        novaTarefa.querySelector("input[type=checkbox]").addEventListener("click",function(){
            this.parentNode.classList.toggle("tarefaConcluida")
        });

        novaTarefa.querySelector(".remover").addEventListener("click", (e)=>{
            let el = e.target
            el.closest("li").remove();
        });

         listaTarefa.append(novaTarefa);

         idTarefa++;
         
         inputTarefa.value = "";
    } else {
        alert('Adicione uma tarefa.')
    }
}

console.log(listaTarefa.length)

//adiconar tarefa com a tecla enter

inputTarefa.addEventListener("keyup", (e)=>{
    if(e.key === "Enter"){
        addTarefa();
    }
});

//direcionar pagina para impressao

let btnImp = document.querySelector('.imprimir')

btnImp.addEventListener('click', ()=>{
    window.print();
})

