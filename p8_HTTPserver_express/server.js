const express = require('express')
const fileSys = require('fs')
const app = express()

/*-------------------------- Practica ----------------------------------------*/
// Funcion de copiado (reinsertar)


//Endpoint de practica - leer un archivo e ingresar respuesta en json
app.get('/test', (request, response) => { 
    //endpoint
    fileSys.readFile('./test.txt', 'utf8', (error, data) => {
        if(error){
            console.log(error)
            return
        }

        response.json({
            message: data
        })
    })
})

/*----------------------------------------------------------------------------*/

// Se puede usar los metodos .post(), .delete(), .put(), .patch(); se puede 
// usar como parametros (ruta, requestHandler), quedando como estructura 
// p/ej: express.get(ruta, requestHandler)
// Metodo GET, el GET se hace a raiz => '/'
app.get('/', (request, response) => { 
    //endpoint
    response.write('Hola Mundo desde express XD')
    response.end()
})

//Al poder establecer varios endpoints, podemos declarar una ruta y un metodo
app.get('/hola',(request, response) => {
    // Con el metodo json se puede obtener una respuesta de este tipo de contenido
    // sin la necesidad de declarar en header el content type de MIME como application/json
    response.json({
        message: 'Holi Crayoli! XD'
    })
    response.end()
})

app.get('/adios',(request, response) => {
    // JSON establecido de forma manual
    response.writeHead(200,{
        // Content type definido como 'application/json'
        'Content-type': 'application/json'
    })
    // Informacion codificada en formato JSON (objeto{llave: valor})
    const responseObject = {
        message: 'adios'
    }
    // Se aplica el metodo JSON.stringify a responseObject con la intencion de 
    //transformar a string este objeto que despues sera convertido a formato 
    //JSON una vez se despliegue
    response.write(JSON.stringify(responseObject))
    response.end()
})

app.post('/',(request, response) => {
    response.json({
        message: 'Holi Crayoli con POST a root! XD'
    })
    response.end()
})

app.delete('/',(request, response) => {
    response.status(400)
    response.json({
        message: 'Delete a root! XD'
    })
    response.end()
})

app.listen(8080, () => {
    console.log('server running')
})

/*----------------------------------------------------------------------------*/

// No usando express
/*
const httpServer = require('http')

const server = httpServer.createServer((request, response) => {
    response.writeHead(200,{
        'Content-type': 'text/html'
    })

    response.write('<h1>Hola Mundo desde Node HTTP</h1>')

    response.end()
})

server.listen(8080)
*/
