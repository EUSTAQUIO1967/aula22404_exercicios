import { Exercicio } from './model/Exercicio' 


const initApp = ():void => {

  let entradaNumero = document.querySelector('#numero') as HTMLInputElement;
  let botoes = document.querySelectorAll('button') as NodeList
  let ulSaida = document.querySelector('.listaNumeros')

  let saidaAvaliacao = document.querySelector('.avaliacao') as HTMLDivElement
  console.log(ulSaida)
  botoes.forEach(ele => {
      ele.addEventListener('click', function(e) {
        let el = e.target;
        console.log(el)
        console.log(el.id);
        if (el.id === 'bt-inserir') {
           let li = document.createElement('li')
           li.innerText = entradaNumero.value
           ulSaida?.appendChild(li);
        }
        if(el.id === 'bt-sel-maior') {
          let numeros: [] = numerosDigitados();
           saidaAvaliacao.innerHTML = 'Maior numero digitado: ' + Exercicio.retornarOMaior(numeros)

          console.log(numerosDigitados())
        }


        if(el.id === 'bt-media') {
         
          let numeros: [] = numerosDigitados();
          let div = document.createElement('div') as HTMLDivElement;
          div.innerHTML +=  `Media: ${Exercicio.calcularMedia(numeros)}<br>`  
          div.innerHTML += `Numeros Pares: ${Exercicio.quantosPares(numeros)}<br>`
          div.innerHTML += `Numeros Impares: ${Exercicio.quantosInpares(numeros)}<br>`
          
          saidaAvaliacao.appendChild(div)
          

        }

      })
  })


  const numerosDigitados: array = () => {
      let numeros:[] = []
      let pegaLista = document.querySelectorAll('li')
      pegaLista.forEach(ele => {
        numeros.push(Number(ele.textContent))
      })
      return numeros;
  }; 

}

document.addEventListener('DOMContentLoaded', initApp)

 
