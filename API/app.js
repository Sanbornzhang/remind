const path = require('path')
var restify = require('restify');
var plugins = require('restify-plugins');

const User = require(path.join(__dirname,'./model/user/index'))

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});
server.use(plugins.acceptParser(server.acceptable));
server.use(plugins.queryParser());
server.use(plugins.bodyParser());

server.get('/echo/:name', function (req, res, next) {
  console.log(req)
  res.send(req.params);
  return next();
});
User.register(server)

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});