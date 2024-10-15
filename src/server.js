// Nos ajuda a construir:
// Aplicações HTTP => APIs
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

//Stateful - Stateless

//Cabeçalhos (Requisição/resposta) => Metadados

import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'


// Query Parameters: URL Stateful => Filtros, paginação, não-obrigatórios
// http://localhost:3333/users?userId=1&name=Raul


// Route Parameters: Identificação de recurso
// GET http://localhost:3333/users/1
// DELETE http://localhost:3333/users/1


// Request Body: Envio de informações de um formulário(HTTPs)
// POST http://localhost:3333/users



const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  const route = routes.find(route => {
    return route.method == method && route.path == url
  })

  if (route) {
    return route.handler(req, res)
  }

  return res.writeHead(404).end('Not found')
})

server.listen(3333)