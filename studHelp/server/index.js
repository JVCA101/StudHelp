// server/index.ts
import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log("Server is running on port ${port}");
  console.log("Press Ctrl+C to quit.");
});

(async () => {
  console.log('Conectou!');
  const prisma = new PrismaClient();
  const cursos = await prisma.curso.createMany({
      data: [
        {
          nome: 'Ciência da Computação',
          codigo: '65A',
        },
        {
          nome: 'Engenharia de Computação',
          codigo: '65B',
        },
        {
          nome: 'Sistemas de Informação',
          codigo: '65C',
        },
      ]
    })
  console.log(cursos);
  const disciplinas = await prisma.disciplina.create({
    data: {
      nome: 'Modelagem de Sistemas',
      codigo: 'DCC117',
      cursos: { 
        create: [
          {
            curso:{
              connect: {
                codigo: '65A' 
              } 
            },
            periodo: 4 
          },
          {
            curso:{
              connect: {
                codigo: '65B' 
              } 
            },
            periodo: 3 
          },
        ],
      },
    },
  })
  console.log(disciplinas);
  const user  = await prisma.estudante.create({
    data: {
      nome: 'Teste',
      login: 'teste@teste.com',
      senha: '123456',
      curso: {
        connect: {
          codigo: '65A',
        },
      },
      turmas:{
        create: [
          {
            turma: {
              create:
              {
                disciplina: {
                  connect: {
                    codigo: 'DCC117',
                  },
                },
                codigoPeriodo: '2023.3',
              },
            }
          },
        ],
      }
    },
  })
  
  console.log(user);
})();