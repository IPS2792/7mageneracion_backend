const fileSys = require('fs')
const express = require('express')
const server = express()
server.use(express.json()) // middleware
const kodemia = JSON.parse(fileSys.readFileSync('kodemia.json'))

// endopoint: combinacion de un metodo y una ruta
// metodo: metodos HTTP (GET / POST / DELETE / PUT / PATCH)
// ruta: string que denota recursos en nuestro servidor
server.get('/', (request, response) => {
    response.json({
        message: 'My first API is running'
    })
})

server.get('/koders', (request, response) =>{
    response.json({
        message: 'All koders',
        data: {
            koders: kodemia.koders
        }
    })
})

server.post('/koders', (request, response) => {
    //response.json(request.body)
    const newKoder = {
        name: request.body.name,
        gen: request.body.gen
    }
    
    kodemia.koders.push(newKoder)
    
    response.json({
        message: "new koder was added",
        data: {
            koder: newKoder
        }
    })
})

/*-------------------------- Practica ----------------------------------------*/
// Hacer una POST y GET para mentores aplicando lo que se vio en clase
server.get('/mentors', (request, response) =>{
    response.json({
        message: 'All mentors',
        data: {
            koders: kodemia.mentors
        }
    })
})

server.post('/mentors', (request, response) => {
    //response.json(request.body)
    const newMentor = {
        name: request.body.name,
        beta: request.body.beta
    }
    
    kodemia.mentors.push(newMentor)
    
    response.json({
        message: "new mentor was added",
        data: {
            mentor: newMentor
        }
    })
})

server.listen(8080, () => {
    console.log('Server running XD')
})