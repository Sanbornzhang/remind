getMethod  = require('./get.js')
postMethod = require('./post.js')
exports.register = (server)=>{
  get(server);
  put(server);
  post(server);
  deleteM(server);
}
const get = (server)=>{
  server.get('/user',(req,res,next)=>{return getMethod.userList(req,res,next)})
}
const post = (server)=>{
  server.post('/user/login',(req,res,next)=>{console.log('dsadsadsa')})
}
const put = (server)=>{

}
const deleteM = (server)=>{

}