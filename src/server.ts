
import "reflect-metadata";
import express from 'express';
import bodyParser from "body-parser";
import envelopeRouter from "./routes/envelope";
import usuarioRouter from "./routes/usuario";

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.use('/api/envelopes', envelopeRouter);
app.use('/api/usuario', usuarioRouter);


app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});
