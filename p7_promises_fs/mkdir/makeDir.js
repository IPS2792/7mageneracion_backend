const fileSys = require('fs')
const src = './test'

// Funcion de copiado
function makeDir(source){
    return new Promise(function(resolve,reject){
        fileSys.mkdir(source, (error) => {
            if (error){
                reject = console.log(error, '\n', 'End of execution')
                return
            }
            resolve = console.log('Operation succeded')
        })
    })
}

let promise = makeDir(src)

promise.then(success => console.log(success)).catch(fail => console.log(fail))
