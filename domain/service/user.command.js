module.exports = (repository) => {
        async function execute(model){
            return Promise.all([repository.findByEmail(model.email), repository.findByUser(model.user)])
            .then((user) => {
                if (user[0]){
                    return Promise.reject("El email ya esta registrado!")
                }
    
                if(user[1]){
                    return Promise.reject("El nombre de usuario ya esta registrado!") 
                }
    
                repository.save(model)
                return Promise.resolve("Usuario Regisrado")
            })
        }
    
        return {execute}
}
