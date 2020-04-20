const fileSys = require('fs')
const srcFile = 'test.txt'
const data = 'Hello World\n'

// Funcion de copiado
function writeNewFile(source, data){
    return new Promise(function(resolve,reject){
        fileSys.writeFile(source, data, (error) => {
            if (error){
                reject = console.log(error, '\n', 'End of execution')
                return
            }
            resolve = console.log('Operation succeded')
        })
    })
}

let promise = writeNewFile(srcFile, data)

promise.then(success => console.log(success)).catch(fail => console.log(fail))
