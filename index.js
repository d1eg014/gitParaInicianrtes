const express = require ('express');
const app = express();

app.get('/', (req, res) =>{
    res.status(200).send ({message: 'Olá mundo esse é meu prójeto clonado'})
})

app.listen(17500, () => {
    console.log('Api inicializada na porta 17500');

})