let btnAdd = document.querySelector('.btn-add');
let inputTarefa = document.querySelector('#inputTarefa');
let listaTarefa = document.querySelector('.tarefas-adicionadas ul')

let contador = document.querySelector('.contador')

// ID para cada tarefa adicionada

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

         console.log(novaTarefa.lenght)
    } else {
        alert('Adicione uma tarefa.')
    }
}



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


// menu

let btnMenu = document.querySelector('.menu-icon')
let menu = document.querySelector('.menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.toggle("close")
})

// tela estatistica e tela configurações

let btnEstat = document.querySelector('.estat')
let btnConfig = document.querySelector('.config')
let telaEstat = document.querySelector('.tela-estatisticas')
let btnClose = document.querySelector('.btn-close')

btnEstat.addEventListener('click', ()=>{
    telaEstat.classList.toggle("close");
    menu.classList.toggle("close");
})

btnClose.addEventListener('click', ()=>{
    telaEstat.classList.toggle("close")
})

btnConfig.addEventListener('click', ()=>{
    return alert("Em Construção")
})




