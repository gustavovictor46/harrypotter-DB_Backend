import express from "express";
import dotenv from "dotenv";
import bruxosRoutes from './src/routes/bruxoRoute.js'

const app = express();

app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Bruuuuuuuxosss");
});

app.use('/bruxos', bruxosRoutes);

app.listen(serverPort, () => {
  console.log(
    ` Servidor Bruxos foi iniciado em: http://localhost:${serverPort}`
  );
});