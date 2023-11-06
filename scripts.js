const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []


function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()

}

function mostrarTarefas() {
    let novaLi = ''
    minhaListaDeItens.forEach( (item, posicao) =>{
        novaLi= novaLi + `
        <li class="task ${item.concluida && "done"}" >
                <img src="./free-check-icon-7090-thumb.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
                <p>${item.tarefa}</p>
                <img src="./lixeira.png" alt="deletar-tarefa" onclick="deletarItem(${posicao})">
            </li>
        `

    })
  listaCompleta.innerHTML = novaLi

  localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida
    mostrarTarefas()

}

function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1)
    
    mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if(tarefasDoLocalStorage){
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)

    }    
    console.log(tarefasDoLocalStorage)
    mostrarTarefas()
}
recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)