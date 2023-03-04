//const UserModel = require("../models/user.models")
/** con el repositorio esta los servicios y el command */
module.exports = class UserRepository{
        constructor(model){
                this.model = model
            }
        
            save(user) {
                return new Promise((resolve, reject) => {
                    this.model(user).save()
                    resolve(user)
                });
            }
        
            findAll(){
                return new Promise((resolve, reject) => {
                   let users = this.model.find()
                   resolve(users)
                })
            }
        
            findByEmail(email){
                return new Promise((resolve, reject) => {
                    this.model.find({email: email})
                        .then((users) => resolve(users[0]));
                });
            }
        
            findByUser(user){
                return new Promise((resolve, reject) => {
                    this.model.find({user: user})
                        .then((users) => resolve(users[0]));
                });
            }
}

/** 
/** @return Users[] 
exports.findAll =async() =>{
        return await UserModel.find()
}

/** registar usuario 
exports.save = async(newUser) =>{
        await newUser.save()
        .then(()=> console.log("Exito a registrar"))
        .catch((error)=> console.error("Error al registro"))
}
*/