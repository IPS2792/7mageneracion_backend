const fileSys = require('fs')
const srcFile = './1/test.txt'
const destFile = './2/test.txt'

// Funcion de copiado
function copyNewFile(source, destination){
    return new Promise(function(resolve,reject){
        fileSys.copyFile(source, destination, (error) => {
            if (error){
                reject = console.log(error, '\n', 'End of execution')
                return
            }
            resolve = console.log('Operation succeded')
        })
    })
}

let promise = copyNewFile(srcFile,destFile)

promise.then(success => console.log(success)).catch(fail => console.log(fail))
