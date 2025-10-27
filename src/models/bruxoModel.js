import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


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

export const criar = async (data) => {
    return await prisma.bruxo.create({
        data: {
            nome: data.nome,
            casa: data.casa,
            patrono: data.patrono,
            varinha: data.varinha,
            anoMatricula: data.anoMatricula

        }
    })
}

export const deletar = async (id) => {
    return await prisma.bruxo.delete({
        where: { id: Number(id)}
    })
}  

export const atualizar = async (id, dado) => {
    return await prisma.bruxo.update({
        where: { id: Number(id)},
        data: {
            ...(dado.nome && { nome: dado.nome }),
            ...(dado.casa && { casa: dado.casa }),
            ...(dado.patrono && { patrono: dado.patrono }),
            ...(dado.varinha && { varinha: dado.varinha }),
            ...(dado.anoMatricula && { anoMatricula: dado.anoMatricula }),
            ...(dado.ativo !== undefined && { ativo: dado.ativo }),
        }
    })
}