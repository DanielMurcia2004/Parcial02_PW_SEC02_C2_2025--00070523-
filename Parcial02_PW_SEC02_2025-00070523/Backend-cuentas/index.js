const express = require('express');
const app = express();
const cuentasRouter = require('./Routes/cuentas');
const controller = require('./Controller/cuentasController');

const PORT = 3130;

app.use(express.json());

app.use('/cuentas', cuentasRouter);

app.get('/cuenta/:id', controller.getById);

app.get('/', (req, res) => {
  res.send('El servidor API de Cuentas se ejecuta en el puerto ' + PORT);
});


app.listen(PORT, () => {
  console.log(` Servidor escuchando en http://localhost:${PORT}`);
});