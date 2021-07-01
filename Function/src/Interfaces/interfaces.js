module.exports = function TodoRepository(_todos) {

    
        return{

            create:function(description) {

                
                return new Promise ((resolve, reject)=>{
                    setTimeout(()=>{
                        try{      
                        
                        let newId = (_todos.size -1) + 1

                        const newTodo = {
                            id: newId,
                            description
                        }
             
                       _todos.set(newId, newTodo)
            
                      
                        resolve(newTodo)

                        }
                        catch(erro){
                            reject(erro)
                        }
            
                    },500)
    
            })     

             },

             getAll:function() {
                
                return new Promise ((resolve, reject)=>{
                    setTimeout(()=>{
                        try{   
                            const arrayTodos = []
                    
                        for(let i = 0; i <=10; i++){

                           let includeTodo = _todos.get(parseInt(i))
                           arrayTodos.push(includeTodo)

                        }

                        resolve(arrayTodos)

                        }
                        catch(erro){
                            reject(erro)
                        }
            
                    },500)

            })
            },

            getById:function(id) {

                return new Promise ((resolve, reject)=>{

                    setTimeout(()=>{
                        try{           


                    const todoSelect=_todos.get(parseInt(id))
        
                     resolve(todoSelect)

                        }
    
                        catch(erro){
                            reject(erro)
                        }
            
                    },500)
            })            },

            delete:function(id) {

                return new Promise ((resolve, reject)=>{

                    setTimeout(()=>{
                        try{               
                            
                        const deleteTodo = _todos.delete(id)

                                resolve(deleteTodo)
                            
                        }
    
                        catch(erro){
                            reject(erro)
                        }
            
                    },500)
            })
                  
                   
               }

        }
   }

 
