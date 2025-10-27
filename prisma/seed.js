import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
  console.log('🦉 Inserindo bruxos no banco...')

  await prisma.bruxos.deleteMany()
  await prisma.$executeRaw`ALTER TABLE comidas AUTO_INCREMENT = 1`

  // insere 20 bruxos
  await prisma.bruxos.createMany({
    data: [
      { nome: 'Harry Potter', casa: 'Grifinória', varinha: 'Azevinho e pena de fênix', habilidade: 'Defender contra as Artes das Trevas' },
      { nome: 'Hermione Granger', casa: 'Grifinória', varinha: 'Videira e nervo de dragão', habilidade: 'Feitiços e inteligência' },
      { nome: 'Ron Weasley', casa: 'Grifinória', varinha: 'Salgueiro e pelo de unicórnio', habilidade: 'Xadrez bruxo e lealdade' },
      { nome: 'Draco Malfoy', casa: 'Sonserina', varinha: 'Pilriteiro e pelo de unicórnio', habilidade: 'Poções' },
      { nome: 'Luna Lovegood', casa: 'Corvinal', varinha: 'Desconhecida', habilidade: 'Pensamento excêntrico e criatividade' },
      { nome: 'Cedric Diggory', casa: 'Lufa-Lufa', varinha: 'Freixo e pelo de unicórnio', habilidade: 'Competição e lealdade' },
      { nome: 'Albus Dumbledore', casa: 'Grifinória', varinha: 'Sabugueiro', habilidade: 'Magia avançada e estratégia' },
      { nome: 'Severus Snape', casa: 'Sonserina', varinha: 'Desconhecida', habilidade: 'Poções e Oclumência' },
      { nome: 'Minerva McGonagall', casa: 'Grifinória', varinha: 'Abeto e nervo de dragão', habilidade: 'Transfiguração e Animagia' },
      { nome: 'Rúbeo Hagrid', casa: 'Grifinória', varinha: 'Carvalho (quebrada)', habilidade: 'Cuidado de Criaturas Mágicas' },
      { nome: 'Ginevra Weasley', casa: 'Grifinória', varinha: 'Teixo', habilidade: 'Feitiços e Quadribol' },
      { nome: 'Neville Longbottom', casa: 'Grifinória', varinha: 'Cerejeira e pelo de unicórnio', habilidade: 'Herbologia' },
      { nome: 'Fred Weasley', casa: 'Grifinória', varinha: 'Desconhecida', habilidade: 'Invenção de logros' },
      { nome: 'George Weasley', casa: 'Grifinória', varinha: 'Desconhecida', habilidade: 'Invenção de logros' },
      { nome: 'Cho Chang', casa: 'Corvinal', varinha: 'Desconhecida', habilidade: 'Quadribol (Apanhadora)' },
      { nome: 'Nymphadora Tonks', casa: 'Lufa-Lufa', varinha: 'Desconhecida', habilidade: 'Metamorfomagia' },
      { nome: 'Sirius Black', casa: 'Grifinória', varinha: 'Desconhecida', habilidade: 'Animagia (cão)' },
      { nome: 'Remus Lupin', casa: 'Grifinória', varinha: 'Cipreste e pelo de unicórnio', habilidade: 'Defesa Contra as Artes das Trevas' },
      { nome: 'Dolores Umbridge', casa: 'Sonserina', varinha: 'Bétula', habilidade: 'Regulamentos e burocracia' },
      { nome: 'Kingsley Shacklebolt', casa: 'Desconhecida', varinha: 'Desconhecida', habilidade: 'Auror e vigilância' },
    ],
  })

  console.log('✨ 20 bruxos de Harry Potter inseridos com sucesso!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })