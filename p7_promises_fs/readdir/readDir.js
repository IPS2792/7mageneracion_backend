const fileSys = require('fs')
const path = require ('path')
const src = path.resolve(__dirname + '/../')

// Funcion de copiado
function readDir(source){
    return new Promise(function(resolve,reject){
        fileSys.readdir(source, (error, files) => {
            if (error){
                reject = console.log(error, '\n', 'End of execution')
                return
            }
            resolve = console.log('Operation succeded', '\n', files)
        })
    })
}

let promise = readDir(src)

promise.then(success => console.log(success)).catch(fail => console.log(fail))
