const TodoRepository = require("../Interfaces/interfaces");
const todoRepository = new TodoRepository() ;

exports.post = (req, res, next) => {

   let description = req.body.description;

   todoRepository.create(description)
      .then(todos=>{res.status(200).send(todos)}) ;
 };

 exports.delete = (req, res, next) => {

    let id = req.params.id;
     
    todoRepository.delete(id).then(todos=>{
         if(!todos){
            res.status(404).send("Não encontrado");
            return
         }
          res.status(200).send("Deletado com Sucesso");

      })

         
      
 };
  
 exports.get = (req, res, next) => {
   todoRepository.get()
      .then(todos => {res.status(200).send(todos)});  

};
  

exports.getById = (req, res, next) => {
   let id = req.params.id;
   
   todoRepository.getById(id)
      .then(todos => {res.status(200).send(todos)})

 }

