
import "reflect-metadata";
import express from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});
