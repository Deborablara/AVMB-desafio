
import "reflect-metadata";
import express from 'express';

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});
