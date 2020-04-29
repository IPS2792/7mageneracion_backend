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

// deconstruccion
server.get('/kodersDestructure', (request, response) =>{
    response.json({
        message: 'All koders',
        data: {
            koders: kodemia.koders
        }
    })
})

server.post('/kodersDestructure', (request, response) => {
    //response.json(request.body)
    const {name, gen} = request.body
    
    kodemia.koders.push({
        name,
        gen
    })
    
    response.json({
        message: "new koder was added",
        data: {
            koder: {
                name,
                gen
            }
        }
    })
})

// uri param
// GET /koders/[name] donde name puede ser algun koder
// p/ej: GET /koders/ivan -> name = ivan
server.get('/testkoders/:name', (request, response) => {
    response.json({
        name: request.params.name
    })
})

// query param
// se pueden hacer consultas a traves del ? en
// http://server/rutarecurso?
// GET http://api.kodemia.mx/koders?limit=10
server.get('/testkodersquery', (request, response) =>{
    const {limit = 10} = parseInt(request.query)

    // Sin deconstruccion
    // let limit = request.query.limit | 10

    response.json({
        message: 'All koders',
        data: {
            koders: kodemia.koders.slice(0, limit)
        }
    })
})

// Practica
// hacer endpoint que reciba indice de koder y regrese el mismo que esta en ese indice
// GET /koders/:indice -> indice = 0 ...kodemia.koders[indice]
server.get('/kodersID/:index', (request, response) =>{
    const{index} = request.params
    response.json({
        message: `koder ${index}`,
        data: {
            koders: kodemia.koders[index-1]
        }
    })
})

server.listen(8080, () => {
    console.log('Server running XD')
})