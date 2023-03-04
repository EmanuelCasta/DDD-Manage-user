/** Se maneja lo logica y condiciones  del negocio */
module.exports = (repository) => {

        async function execute(){
                /** Aqui se van a recuperar los usuarios */
                const users = repository.findAll();

                return new Promise((resolve,reject)=>{
                        resolve(users)
                })
        }

        return {execute}
}