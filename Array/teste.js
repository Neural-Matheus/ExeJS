const http = require('http')
http.createServer((req, res) => {
    res.write('Marquim eh gay')
    res.end()
}).listen(9109)