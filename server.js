var express = require('express');
const cors = require('cors');
var server = express();
var routes = require('./routes/routes');
const mongoose = require('mongoose');
const router = require('./routes/routes');

mongoose.connect('mongodb://127.0.0.1:27017/trabalhowa', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Conectado ao DB');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao DB:', error);
  });

server.use(express.json());
server.use(routes);
server.use(cors());

server.listen(8000, function checar(error) {
    if (error) {
        console.log("error")
    } else {
        console.log("Server iniciado")
    }
});