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
      'Alzarsi al mattino con una nuova illusione',
      'Prendere il 109 per la rivoluzione',
      'Salire in teleferica, su un grattacielo, e farsi un uovo',
      'Cercare il rock and roll nei bar e nei metrò',
      'Cercare una bandiera diversa, senza sangue e sempre tersa'
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