import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './css/style.css'

import { Tarefas } from './model/Tarefas';
import  Tarefa  from './interface/Tarefa';

const initApp = ():void => {
  let id: number = 0

  const inputText  = document.querySelector('#tarefa') as HTMLInputElement
  const btnIncluir = document.querySelector('[bt-incluir]') as  HTMLButtonElement
  const tabela = document.querySelector('.listaTarefas') as HTMLTableElement
  const tarefas = new Tarefas();

  btnIncluir.addEventListener('click', (e) => {
    e.preventDefault();
    if(inputText.value){
      tarefas.addTarefa(++id, inputText.value, false)
      inputText.value = ''
      criarLinha(tarefas.getTarefas())
    } else {
      alert("Ops, descreva sua tarefa por favor!!!")
    }
      
    
  })

  

  // Adicionar linhas na tabela
  const criarLinha =  (lista: Tarefa) => {
    
    tabela.innerHTML = '';

    lista.forEach(obj => {
         // console.log(obj)
         let tr = document.createElement('tr') as HTMLTableRowElement;
          const numId: number = Number(obj.id);
          let btToogle: number = (obj.status === false) ? 0 : 1;
          for (let chave of Object.keys(obj)) {
            let td = criaTd();
            if(chave === 'status') {
               let valorBtn = (btToogle === 0) ? `<button class='btn btn-success' btn-concluir="${numId}" bt-toogle="${btToogle}">Concluir</button>` : `<button class='btn btn-warning' btn-concluir="${numId}" bt-toogle="${btToogle}">Concluida</button>`;
               td.innerHTML = valorBtn;
            } else {
              td.innerText = obj[chave]
            }
            tr.appendChild(td)
          }
      tabela.appendChild(tr)
      adicionarEventosBotoes();      
    });
    
  }
  
  const criaTd = () => document.createElement('td') as HTMLTableCellElement;


  // adicionar eventos nos botóes 

const adicionarEventosBotoes = () => {
  let botoesConcluir = document.querySelectorAll('[btn-concluir]') as NodeList
  if (botoesConcluir) {
      botoesConcluir.forEach(botao => {
        botao.addEventListener('click', e => {
          e.preventDefault()
          const el = e.target as HTMLButtonElement
          const iddoBotao: string  = el.getAttribute('btn-concluir');
          const valorBtToogle = el.getAttribute('bt-toogle');
          //tarefa não foi marcada como concluida se balorBtToogle = 0           
          if (valorBtToogle == '0'){
            tarefas.concluirDesfazer(iddoBotao, true)
          } else {
            tarefas.concluirDesfazer(iddoBotao, false)
          }

          criarLinha(tarefas.getTarefas())
          });
      }); 
  }


}
  

}


document.addEventListener('DOMContentLoaded', initApp)
