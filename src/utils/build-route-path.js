// /users/:id
export function buildRoutePath(path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g

    console.log(Array.from(path.matchAll(routeParametersRegex)))
}


// explicando o const routeParametersRegex = /:([a-zA-Z]+)/g
// /users/:id

// a ideia é conseguir capturar parametros dinamicos(como :id)
// para criar uma regex usamos //, e pra definir que o parametro vai
// vir depois dos :, fica /:/
// depois, colocamos que isso tera letras de a-z minusculas e letras
// de a-z maiusculas, entao fica /:([a-zA-Z])/

// os parenteses criam um subgrupo, neste caso, o subgrupo seria id
// depois, queremos dizer que pode ter mais de uma letra maiuscula/minuscula,
//entao fica /:([a-zA-Z]+)/ (colocamos esse maizinho +)
// por ultimo, colocamos o g no final, que fica /:([a-zA-Z]+)/g,
// pois estamos dizendo que é uma regex global, entao ela nao vai
// procurar apenas o primeiro parametro dinamico, ela vai procurar
// todos!