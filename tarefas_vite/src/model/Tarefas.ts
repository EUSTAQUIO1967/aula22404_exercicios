import Tarefa from '../interface/Tarefa'

export class Tarefas implements Tarefa{

    id: number = 0;
    tarefa: string = '';
    status: boolean = false;

    tarefas: Array<Tarefa> = [];

    constructor() {
         
    }

   
    getTarefas() {
        return this.tarefas;
    }


    addTarefa(id: number, tarefa: string, status: boolean=false){
        let objectTarefa: Tarefa = {
                id: id,
                tarefa: tarefa,
                status: status
             };
        this.tarefas.push(objectTarefa);
    }

    concluirDesfazer(id: number, valor: boolean){
        let indice = this.tarefas.indexOf(this.tarefas.find(tarefa => tarefa.id === Number(id)));
        this.tarefas[indice].status = valor;
        

    }


}