module.exports = class TodoRepository {


        _todos = [{
            id:1,
            description: "Jogar bola"
        },
        {
            id:2,
            description: "Estudar para faculdade"
        },]

        create(description) {


            return new Promise ((resolve, reject)=>{
                setTimeout(()=>{
                    try{      
                        let newId = this._todos[this._todos.length -1].id + 1

                        const newTodo = {
                            id: newId,
                            description
                        }
             
                        this._todos.push(newTodo)
             
                         
                      
                        resolve(newTodo)
                    }
                    catch(erro){
                        reject(erro)
                    }
        
                },500)

        })
          
        }
        get() {

            return new Promise ((resolve, reject)=>{
                setTimeout(()=>{
                    try{               
                        resolve(this._todos)
                    }
                    catch(erro){
                        reject(erro)
                    }
        
                },500)

        })
    }


        getById(id) {

            return new Promise ((resolve, reject)=>{

                setTimeout(()=>{
                    try{               
                        resolve(this._todos.find((todo)=> id==todo.id))
                    }

                    catch(erro){
                        reject(erro)
                    }
        
                },500)
        })
    }

        delete(id) {

            return new Promise ((resolve, reject)=>{

                setTimeout(()=>{
                    try{               
                        
                        const index = this._todos.findIndex((todo)=> id==todo.id)

                            if(index == -1){
                                resolve (false)
                            }
                            this._todos.splice(index, 1) 

                            resolve (true)
                        
                    }

                    catch(erro){
                        reject(erro)
                    }
        
                },500)
        })
           
            
        }
   }

 


   