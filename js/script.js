/* 
Descrizione: Rifare l'esercizio della to do list come fatto assieme in classe:
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: 
  digitando il tasto invio oppure ciccando su un pulsante, 
  il testo digitato viene aggiunto alla lista
*/

var app = new Vue({
  el: '#app',
  
  data: {
    todos: [
      'Fare i compiti',
      'Fare la spesa',
      'Giocare a PES2021',
      'Aggiustare smartphone'
    ],
    todoDeleted: [],
  },

  methods:{
    deleteToDo(index){
      this.todoDeleted.push(this.todos[index]);
      this.todos.splice(index, 1);
    },

    restoreToDo(index){
      this.todos.push(this.todoDeleted[index]);
      this.todoDeleted.splice(index, 1);
    }
  }
});