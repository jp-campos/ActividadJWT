
let bcrypt = require('bcrypt')
let Usuario = require('../lib/utils/sqlize').Usuario
let {createToken} = require('../lib/utils/middleware')
const saltRounds = 10

async function login(user){

    let foundUser= await Usuario.findOne({where: {username: user.username}})
    console.log(user)
    console.log(foundUser)
    if(!foundUser){
        throw new Error('Authentication failed')
    }

    const isValid = await bcrypt.compare(user.password, foundUser.password)
    if(isValid){
        delete user.password;
        let token = createToken(user)
        user.token = token
        return user 
    }else{
        throw new Error('Authentication failed')
    }
}


async function createUser(user){
    console.log(user)
    if(user.password){
        user.password = await bcrypt.hash(user.password, saltRounds)
    }

    console.log(user)
    return await Usuario.create(user)
    
}




module.exports = [login, createUser];