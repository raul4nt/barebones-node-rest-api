import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1

        console.log(transformed)

        //o primeiro parametro estamos colocando null para 
        //exemplificar, mas seria caso desse algum erro
        callback(null, Buffer.from(String(transformed)))
    }
}

// req => ReadableStream 
// res => WritableStream


const server = http.createServer(async (req, res) =>{
    

    // percorrendo toda a Stream, e, enquanto ela nao for percorrida por 
    // completo, nada abaixo dessas linhas vai ser executado
    // for await (const chunk of req) {
    //     buffers.push(chunk)
    // }

    console.log(fullStreamContent)

    return res.end(fullStreamContent)
//     return req
//     .pipe(new InverseNumberStream())
//     .pipe(res)
})

server.listen(3334)

