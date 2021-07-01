const TodoRepository = require("../Interfaces/interfaces");

exports.post = (req, res, next) => {

   let description = req.body.description;

   todoRepository.create(description, (todos) =>{ 
      res.status(201).send(todos)})

   
 };
 exports.delete = (req, res, next) => {

    let id = req.params.id;

      todoRepository.delete(id, (condicion, todos)=>{

         if(!condicion){

            res.status(404).send("Não encontrado");
            return
         }
          res.status(200).send(todos);

      });

      }



         
  


      exports.get = (req, res, next) => {
         
         todoRepository.get((todos) =>{res.status(200).send(todos)});   
     };
     
  
 exports.getById = (req, res, next) => {

      let id = req.params.id;
      todoRepository.getById(id,(todos)=>res.status(200).send(todos))
    
 };



 