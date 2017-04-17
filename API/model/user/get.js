const path = require('path')

const Model = require(path.join(__dirname,'../../bin/Model'))
const User = Model(path.join(__dirname,'./user.yaml'))

const userIcon = (aReq,aRes,next)=>
{

}
exports.userList = (aReq,aRes,next)=>
{
  return User.find()
  .then((vUsers)=>{
    aRes.send(vUsers)
    return next()
  })
}