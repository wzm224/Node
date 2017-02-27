var http  = require('http')

http.createServer((req,res)=>{
	res.writeHead(200,{'Content-Type':'text/html;charse=utf-8'})
	if (req.url !== 'favicon.ico') {

	console.log('hollo world')
	res.write('<i>hello Node.js<i>')
	res.end()

	}
}).listen(3000)

console.log('Server running at localhost:300') 