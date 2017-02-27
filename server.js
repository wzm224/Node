var http = require('http')

var hostname = 'localhost'

var port = 3000

var server = http.createServer(function  (req,res) {
	// req 请求对象  res 后端给前端输送的请求

	res.statusCode = 200
	res.setHeader('Content-Type','text/plain')
	res.end('hello Nodejs')

})

server.listen(port,hostname,function(){
	console.log('Server running at http://localhost:3000')
})
