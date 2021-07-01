 function TodoRepository(_todos) {
      
    this._todos=_todos;

    }
    TodoRepository.prototype.create = function (description , cb){
       
        let newId = this._todos[this._todos.length -1].id + 1
     
        const newTodo = {
            id: newId,
            description
        };

        this._todos.push(newTodo);

        setTimeout(()=>{return cb(this._todos)},500)

    }
    TodoRepository.prototype.get = function(cb)  {
        
        setTimeout(()=>{return cb(this._todos)},500)

    }

    TodoRepository.prototype.getById = function (id, cb) {

        setTimeout(()=>{return cb(this._todos.find((todo)=> id==todo.id))},500)
        ;

    }
    TodoRepository.prototype.delete = function(id, cb) {

        const index = this._todos.findIndex((todo)=> id==todo.id);
       


                if(index == -1){
                   return cb(false);
                }
                this._todos.splice(index, 1) 
                setTimeout (()=>{return cb(true, this._todos)});
    }

    
    const todo = [{
        id:1,
        description: "Escovar  os dentes"
     },
     {
        id:2,
        description: "Estudar JS"
     },];
     
     
    module.exports = todoRepository = new TodoRepository(todo);






