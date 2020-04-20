const fileSys = require('fs')
const srcFile = 'test.txt'

function unlinkFile(source){
    return new Promise(function(resolve,reject){
        fileSys.unlink(source, (error) => {
            if (error){
                reject = console.log(error, '\n', 'End of execution')
                return
            }
            resolve = console.log('Operation succeded')
        });
    })
}

let promise = unlinkFile(srcFile)

promise.then(success => console.log(success)).catch(fail => console.log(fail))