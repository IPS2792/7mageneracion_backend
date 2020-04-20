const fileSys = require('fs')
const src = './test'

// Funcion de copiado
function removeDir(source){
    return new Promise(function(resolve,reject){
        fileSys.rmdir(source, (error) => {
            if (error){
                reject = console.log(error, '\n', 'End of execution')
                return
            }
            resolve = console.log('Operation succeded')
        })
    })
}

let promise = removeDir(src)

promise.then(success => console.log(success)).catch(fail => console.log(fail))
