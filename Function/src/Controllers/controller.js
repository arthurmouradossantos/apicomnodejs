const todos = new Map()



for(let i = 0; i < 1000000; i++) {

    const todo = {
      
      id: i, 
      description: "Todo " + i

   }

    todos.set(todo.id, todo)

   

}


const TodoRepository = require("../Interfaces/interfaces");
const todoRepository = new TodoRepository(todos) 



exports.post = (req, res, next) => {

   let description = req.body.description;

   todoRepository.create(description)
      .then(todos=>{res.status(200).send(todos)}) ;

 };

 exports.delete = (req, res, next) => {

    let id = req.params.id;

    todoRepository.delete(id).then(todos=>{

         if(!todos){
            console.log(todos)

            res.status(404).send("Não encontrado");

            return
         }
          res.status(200).send("Deletado com Sucesso");

      })

         
      
 };
  
 exports.getAll = (req, res, next) => {
   todoRepository.getAll()
      .then(todos => {res.status(200).send(todos)});  

};
  

exports.getById = (req, res, next) => {
   let id = req.params.id;
   todoRepository.getById(id)
      .then((todos) => {res.status(200).send(todos);})

 }
