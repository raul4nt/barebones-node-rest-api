// Nos ajuda a construir:
// Aplicações HTTP => APIs
import http from 'node:http'
// CommonJS => Require 
// ESModules => import/export


// - Criar usuários
// - Listagem usuários
// - Edição de usuários
// - Remoção de usuários
// - HTTP
//   - Método HTTP
//   - URL
// GET, POST, PUT, PATCH, DELETE
// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso do back-end
// GET /users => Buscando usuários no banc-end
// POST /users => Criar um usuário no back-end


const server = http.createServer((req, res) => {
    return res.end('Hello Ignite')
})

server.listen(3333)