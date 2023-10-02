import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import envelopeRouter from "./routes/envelope";
import usuarioRouter from "./routes/usuario";
import repositorioRouter from "./routes/repositorio";
import swaggerConfig from "./swagger.json";

const app = express();
const port = 8080;

const corsOptions = {
  origin: 'http://localhost:3000',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};


app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerConfig))



app.use(bodyParser.json());
app.use(cors());


app.use(cors(corsOptions));

app.use('/api/envelopes', envelopeRouter);
app.use('/api/usuario', usuarioRouter);
app.use('/api/repositorio', repositorioRouter);


app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});
