// app.js
const express = require('express');
const app = express();
const automobileRoutes = require('./routes/automobileRoutes');
const automobileDetailsRoutes = require('./routes/automobileDetailsRoutes');

app.use(express.json());

app.use('/automobiles', automobileRoutes);
app.use('/automobile-details', automobileDetailsRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
