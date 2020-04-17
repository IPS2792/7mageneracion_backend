const httpServer = require('http')

const server = httpServer.createServer((request, response) => {
    response.writeHead(200,{
        'Content-type': 'text/html'
    })
    console.log('Method: ', request.method)
    console.log('URL: ', request.url)

    if(request.url === '/hola'){
        response.write('<h1>Hola Mundo desde Node HTTP</h1>')
    }

    if(request.url === '/adios'){
        response.write('<h1>Adios desde Node</h1>')
    }

    response.end()
})

server.listen(8080)