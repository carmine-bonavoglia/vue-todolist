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
    newToDo: '',
    todos: [
      'Fare i compiti',
      'Fare la spesa',
      'Lavare i piatti',
      'Rifare i letti'
    ],
    todoDeleted: [],
  },

  methods:{

    addToDo(){
      if(this.newToDo.length < 4){
        alert('La lunghezza deve essere maggiore di 4 caratteri!');
      } else {
        this.todos.push(this.newToDo);
        this.newToDo = '';
      }
    },

    deleteToDo(index){
      this.todoDeleted.push(this.todos[index]);
      this.todos.splice(index, 1);
    },

    restoreToDo(index){
      this.todos.push(this.todoDeleted[index]);
      this.todoDeleted.splice(index, 1);
    },

    deleteSingle(index){
      this.todoDeleted.splice(index, 1);
    },
    
    deleteAll(){
      this.todoDeleted = [];
    }
  }
});