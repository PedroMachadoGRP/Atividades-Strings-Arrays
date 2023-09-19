let pergunta = prompt("Insira uma tarefa que você tem que realizar")
let pergunta2 = prompt("Insira uma segunda tarefa que você deve realizar")
let pergunta3 = prompt("Insira uma terceira tarefa que você deve realizar")
let listaDeTarefas = [pergunta,pergunta2,pergunta3]
console.log("Suas tarefas são", pergunta,pergunta2,"e", pergunta3);
alert(`Suas tarefas são ${pergunta},${pergunta2} e ${pergunta3}`)
let pergunta4 = prompt("Qual o indice de alguma das tarefas que você realizou?")
let remover = listaDeTarefas.splice(pergunta4,1)
console.log(listaDeTarefas);
console.log(remover);
