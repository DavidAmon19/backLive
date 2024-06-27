const todos = require('./produtos');

const metodoListar = () =>{
    return todos().map((item) =>{
        return `-------------\n${item.nome}\n${item.preco}\n-------------`;
    }).join('\n');
}

module.exports = metodoListar;



