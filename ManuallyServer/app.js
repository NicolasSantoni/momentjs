var http = require('http')

http.createServer(function(req,res){
res.end("Hello word, welcome to my website with nodeJS")

}).listen(8081)

console.log("servidor esta rodando")