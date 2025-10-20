// é no model que fazemos a consulta para o banco de dados
//ex: SELECT * FROM bruxos; porém no prisma vamos usar comandos
// que abstrai a query -> mas ainda sim é query para o DB

// importar o prisma client
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Criar exportando a variavel -> findAll que vai ser o SELECT * FROM bruxos;
export const encontreTodos = async () => {
    //SELECT * FROM bruxos;
    return await prisma.bruxo.findMany({
        orderBy: { nome: 'asc' }
    });
}

export const encontreUm = async () => {
    //SELECT * FROM bruxos WHERE  id =1;
    return await prisma.bruxo.findUnique({
        where: { id: Number(id)}
    })
}