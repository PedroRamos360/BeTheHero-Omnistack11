const express = require('express');

const app = express();

app.use(express.json());

// Rota => conjunto completo
// Recurso => parte da rota exemplo /users

// Métodos HTTP
// GET: Buscar uma informação no back-end
// POST: Criar uma informação no back-end
// PUT: Alterar uma informação no back-end
// DELETE: Deletar uma informação no back-end

/* Tipos de Parametros:
Query Params: parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
Route Params: parâmetros utilizados para identificar recursos 
Request Body: corpo da requisição, utilizando para criar ou alterar recursos

*/

app.post('/users/:id', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana Omnistack 11',
        aluno: 'Pedro Henrique Warken Ramos'
    });
});

app.listen(3333);