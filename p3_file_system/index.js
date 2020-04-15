// Ejercicio
// Buscar y borrar
// 1) Existe ruta?
// 2) Tiene archivos dentro?
const fs = require('fs')

function rmdir(path){
    fs.access(pathToDelete, error =>{
        if (error){
            console.error(`Path ${pathToDelete} doesn't exist`)
            return
        }
        // archivo existe
        fs.stat(pathToDelete, (error, stats) =>{
            if(error){
                console.error('No se pudo leer el path: ', pathToDelete)
                return
            }
            if(stats.isDirectory()){
                fs.readdir(pathToDelete, (error, files) => {
                    if(error){
                        console.error('No se pudo leer la carpeta: ', error)
                        return
                    }
                    files.forEach(file, index) => {
                        const pathFile = `${pathToDelete} / ${file}`
                        fs.stat(pathFile, fileStats) => {
                            if(fileStats.isDirectory()) {
                                rmdir(path)
                            } else {
                                fs.unlink(pathFile, error => {
                                    console.log('el archivo ', pathFile, ' fue borrado')
                                    if(files.length === index){
                                        fs.rmdir(pathToDelete, error =>{
                                            if(error) {
                                                console.error('No se pudo borrar la carpeta')
                                                return
                                            }
                                            console.log('Carpeta borrada ;)')
                                        })
                                    }
                                    return
                                })
                            }
                        }
                    }
                })
            }
            console.log('La rura indicada apunta a un archivo y no a una carpeta')
        })
    })
}

rmdir('delete_me')