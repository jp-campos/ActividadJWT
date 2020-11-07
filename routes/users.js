var express = require('express');
var router = express.Router();
let [login, createUser] = require('../controllers/users')




router.post('/', async function(req, res, next) {
  console.log('entra a post')
  const newUser = await createUser(req.body)
  res.send(newUser);
});


router.post('/login' ,async  function(req, res, next) {
  try{
    let user = await login(req.body)
    res.send(user)
  }catch(e){
    console.log(e)
    res.send(403).json({succes:false, message:'incorrect username or password'})
  }
})

module.exports = router;
