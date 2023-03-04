const userServices = require("../domain/service/user.services")
const userCommand = require("../domain/service/user.command")


module.exports = (repository) => {
        /** Buscar todos */
        const findAll = (req,res) =>{
                userServices(repository)
                .execute()
                .then((result)=> res.send(result))
                .catch((err) => {
                        console.error(err);
                        res.sendStatus(500).json("Error al consultar!")
                    });
        }
        
        /** Guardar */
        const save = (req,res) =>{
                const user =req.body
                /** Recuperar el body  de la peticion*/
                userCommand(repository)
                .execute(user)
                .then((result)=> res.send(result))
                .catch((err) => {
                    console.error(err);
                    res.send("Error al consultar!")
                })
        }

        return{
                findAll,
                save
        }

}

