const fileSys = require('fs')
const srcFile = 'test.txt'

// Funcion de copiado
function readFile(source){
    return new Promise(function(resolve,reject){
        fileSys.readFile(source, 'utf8', (error,data) => {
            if (error){
                reject = console.log(error, '\n', 'End of execution')
                return
            }
            resolve = console.log(data)
        })
    })
}

let promise = readFile(srcFile)

promise.then(success => console.log(success)).catch(fail => console.log(fail))
