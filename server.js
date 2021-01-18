const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Olá mundo estou funcionando!' });
})

app.get('/ola', (req, res) => {
  res.status(200).send({ message: 'Oi ... eu sou a rota Ola!' });
})

app.listen(3001, () => {
  console.log('API rodando na porta 3001');
})
