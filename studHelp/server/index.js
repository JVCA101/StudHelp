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
  await prisma.curso.update({
    where: {
      codigo: '65A',
    },
    data: {
      grade:{
        create:[
          {
            disciplina: {
              create: {
                nome: 'Modelagem de Sistemas',
                codigo: 'DCC117',
              },
            },
            periodo: 4,
          },
          {
            disciplina: {
              create: {
                nome: 'Grafos',
                codigo: 'DCC059',
              },
            },
            periodo: 3,
          },
          {
            disciplina: {
              create: {
                nome: 'Estrutura de Dados I',
                codigo: 'DCC013',
              },
            },
            periodo: 2,
          },
        ]
      }
    },
  })
  await prisma.curso.update({
    where: {
      codigo: '65B',
    },
    data: {
      grade:{
        create:[
          {
            disciplina: {
              connect: {
                codigo: 'DCC117',
              },
            },
            periodo: 4,
          },
          {
            disciplina: {
              connect: {
                codigo: 'DCC059',
              },
            },
            periodo: 3,
          },
          {
            disciplina: {
              connect: {
                codigo: 'DCC013',
              },
            },
            periodo: 2,
          },
        ]
      }
    },
  })
  // const disciplinas = await prisma.disciplina.create({
  //   data: {
  //     nome: 'Modelagem de Sistemas',
  //     codigo: 'DCC117',
  //     cursos: { 
  //       create: [
  //         {
  //           curso:{
  //             connect: {
  //               codigo: '65A' 
  //             } 
  //           },
  //           periodo: 4 
  //         },
  //         {
  //           curso:{
  //             connect: {
  //               codigo: '65B' 
  //             } 
  //           },
  //           periodo: 3 
  //         },
  //       ],
  //     },
  //   },
  // })
  // console.log(disciplinas);
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