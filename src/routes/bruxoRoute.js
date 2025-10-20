// Controla as rotas, ou seja, o caminho da URLs
import { Router } from "express";
import * as BruxoController from './../controllers/bruxoController.js';

const router = Router();

router.get("/", BruxoController.listarTodos);

export default router;