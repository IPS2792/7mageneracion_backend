const request = {
    body: {
        name: 'ivan',
        //contenido de ejemplo para rest
        gender: 'male',
        email: 'ipedrazas@outlook.com'
    }
}

// deconstruccion
// deconstruccion de un objeto
// const {atributos a obtener} = objeto a deconstruir (del que se obtendran atributos)
const {name} = request.body
console.log('name: ', name) // salida esperada name:  ivan

// renombramiento en la deconstruccion
// dentro de {}, se usa operador : con la siguiente estructura
// en el lado izquierdo es el nombre del atributo como esta en el objeto
// en el lado derecho se definira el nombre deseado
const {name:koderName} = request.body
console.log('koderName: ', koderName)

// dar valor por defecto
// Se usa el operador de asignacion (=)
const {phone = '5555555555'} = request.body
console.log('phone: ', phone)

// Usando todos los elementos anteriores
const {name: mentorName = 'Isra'} = request.body
console.log('mentorName: ', mentorName)

// buenas practicas

// usar varias lineas al deconstruir mas de 2 atributos
// OK
/*const {
    name: dudeName = 'dude',
    phone,
    age: ageDude = 18
} = request.body
//NOK
const {name: dudeName = 'dude', phone, age: ageDude = 18} = request.body
*/
// Deconstruccion de arreglo
// Arreglo
const koders = ['Mar', 'Elvira', 'Airy', 'Fer']
const mentors = [
    {
        name: 'Israel'
    },
    {
        name: 'Charles'
    }
]

// Deconstruccion con base en la posicion de los elementos
// const [elementos posicionales que quiero del arreglo] = arreglo a deconstruir
const [uno,,tres] = koders
console.log('uno: ', uno, ',', ' tres: ', tres)

const {name: mentorNameNew} = mentors[0]
const[{name: newName}] = mentors
console.log('name: ', mentorNameNew)

/*--------------- spread y rest operator (...) ---------------*/
// spread es esparcir, nos ayuda a sacar los valores de un objeto
// rest nos ayuda a agrupar el resto de atributos / miembros en un solo contenedor
// rest operator (...), se caractreiza porque se usa dentro de una deconstruccion, para esto:
// del lado izquierdo del igual
const{email, ...restoDeObjeto} = request.body
console.log('email: ', email)
console.log('restoDelObjeto: ', restoDeObjeto) // tipo de objeto

//Aplicado a un array
const [unKoder, otroKoder, ...restoDelArreglo] = koders
console.log('unKoder: ', unKoder)
console.log('restoDelArreglo: ', restoDelArreglo)

// spread operator (...) se usa en el lado derecho del igual
const koderPersonal = {
    name: 'name',
    age: 'age'
}

const koderKodemiaInfo = {
    gen: 7,
    fechaIngreso: new Date()
}

const koderCompleto = {...koderPersonal, ...koderKodemiaInfo}
console.log('koderCompleto: ', koderCompleto)

const koderMasCompleto = {
    colorFav: 'azul',
    peliculaFav: 'Grinch',
    ...koderCompleto
}

console.log('koderMasCompleto: ', koderMasCompleto)

//Aplicado a un array
const sextaGen = ['Adan', 'Ivan']
const septimaGen = ['Ivan', 'Fer']

const sextaSeptima = [...sextaGen, ...septimaGen, 'Fin de Arreglo']
const septimaSexta = ['Septima:', ...septimaGen, 'Sexta: ', ...sextaGen]
console.log('sextaSeptima: ', sextaSeptima)
console.log('septimaSexta: ', septimaSexta)
