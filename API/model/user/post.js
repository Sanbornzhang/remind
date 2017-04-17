const path = require('path')

const Model = require(path.join(__dirname,'../../bin/Model'))
const User = Model(path.join(__dirname,'./user.yaml'))

exports.login = (aReq,aRes,next)=>
{
  return User.find({where:{userName:aUserName,passWord:aPassword}})
  .then((vUser)=>{
    if(!vUser.length)
    {
      const error = new Error()
      error.code      = 'NO_SUCH_USER'
      error.message   = 'incorrect username or password'
      error.statusCode= 401
    }
    next()
  })
}
const register = (aReq,aRes,next)=>
{
  vUser = {
    userName: aReq.userName,
    passWord: aReq.passWord,
  }
  return Model.create(vUser)
  .then(()=>
  {
    return
  })
}
