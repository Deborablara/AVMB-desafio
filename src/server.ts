import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import envelopeRouter from "./routes/envelope";
import usuarioRouter from "./routes/usuario";
import multer from 'multer';
import repositorioRouter from "./routes/repositorio";

const app = express();
const port = 8080;

const corsOptions = {
  origin: 'http://localhost:3000',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};



app.use(bodyParser.json());
app.use(cors());



const upload = multer({ dest: 'uploads' });


app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('Nenhum arquivo foi enviado.');
  }
  res.send('Arquivo enviado com sucesso.');
});




app.use(cors(corsOptions));

app.use('/api/envelopes', envelopeRouter);
app.use('/api/usuario', usuarioRouter);
app.use('/api/repositorio', repositorioRouter);


app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});
