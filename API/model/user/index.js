getMethod  = require('./get.js')
postMethod = require('./post.js')
const register = (server)=>{
  get(server);
  put(server);
  post(server);
  deleteM(server);
}
const get = (server)=>{

}
const post = (server)=>{
  server.post('/user/login',postMethod.login(req,res,next))
}
const put = (server)=>{

}
const deleteM = (server)=>{

}