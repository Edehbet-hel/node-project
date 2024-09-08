const http = require('http')
http.createServer(function(request,response){
    response.end("<h1>Hello Node!!!</h1>/n")

}).listen(3000)
console.log('server running at http//localhost:3000')