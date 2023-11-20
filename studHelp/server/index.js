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
                nome: 'Algoritmos',
                codigo: 'DCC199',
                creditos: 6,
              },
            },
            periodo: 1,
          },
          {
            disciplina: {
              create: {
                nome: 'Algoritmos - Prática',
                codigo: 'DC5199',
                creditos: 0,
              },
            },
            periodo: 1,
          },
          {
            disciplina: {
              create: {
                nome: 'Laboratório de Introdução às Ciências Físicas',
                codigo: 'FIS122',
                creditos: 2,
              },
            },
            periodo: 1,
          },
          {
            disciplina: {
              create: {
                nome: 'Introdução às Ciências Exatas',
                codigo: 'ICE001',
                creditos: 2,
              },
            },
            periodo: 1,
          },
          {
            disciplina: {
              create: {
                nome: 'Cálculo I',
                codigo: 'MAT154',
              },
            },
            periodo: 1,
          },
          {
            disciplina: {
              create: {
                nome: 'Geometria Analítica e Sistemas Lineares',
                codigo: 'MAT155',
              },
            },
            periodo: 1,
          },
          {
            disciplina: {
              create: {
                nome: 'Química Fundamental',
                codigo: 'QUI125',
              },
            },
            periodo: 1,
          },
          {
            disciplina: {
              create: {
                nome: 'Laboratório de Química',
                codigo: 'QUI126',
              },
            },
            periodo: 1,
          },
          {
            disciplina: {
              create: {
                nome: 'Algoritmos II',
                codigo: 'DCC200',
                creditos: 6,
              },
            },
            periodo: 2,
          },
          {
            disciplina: {
              create: {
                nome: 'Algoritmos II - Prática',
                codigo: 'DC5200',
                creditos: 0,
              },
            },
            periodo: 2,
          },
          {
            disciplina: {
              create: {
                nome: 'Introdução à Estatística',
                codigo: 'EST028',
              },
            },
            periodo: 2,
          },
          {
            disciplina: {
              create: {
                nome: 'Introdução à Extensão',
                codigo: 'EXT099',
              },
            },
            periodo: 2,
          },
          {
            disciplina: {
              create: {
                nome: 'Física I',
                codigo: 'FIS073',
              },
            },
            periodo: 2,
          },
          {
            disciplina: {
              create: {
                nome: 'Laboratório de Física I',
                codigo: 'FIS077',
                creditos: 2,
              },
            },
            periodo: 2,
          },
          {
            disciplina: {
              create: {
                nome: 'Cálculo II',
                codigo: 'MAT156',
              },
            },
            periodo: 2,
          },
          {
            disciplina: {
              create: {
                nome: 'Laboratório de Transformações Químicas',
                codigo: 'QUI168',
                creditos: 2,
              },
            },
            periodo: 2,
          },
          {
            disciplina: {
              create: {
                nome: 'Estrutura de Dados I',
                codigo: 'DCC013',
              },
            },
            periodo: 3,
          },
          {
            disciplina: {
              create: {
                nome: 'Orientação a Objetos',
                codigo: 'DCC025',
              },
            },
            periodo: 3,
          },
          {
            disciplina: {
              create: {
                nome: 'Circuitos Digitais',
                codigo: 'DCC122',
              },
            },
            periodo: 3,
          },
          {
            disciplina: {
              create: {
                nome: 'Lógica e Fundamentos da Computação',
                codigo: 'DCC160',
              },
            },
            periodo: 3,
          },
          {
            disciplina: {
              create: {
                nome: 'Desenvolvimento Web',
                codigo: 'DCC202',
                creditos: 2,
              },
            },
            periodo: 3,
          },
          {
            disciplina: {
              create: {
                nome: 'Introdução à Teoria dos Números',
                codigo: 'MAT143',
              },
            },
            periodo: 3,
          },
          {
            disciplina: {
              create: {
                nome: 'Cálculo III',
                codigo: 'MAT157',
              },
            },
            periodo: 3,
          },
          {
            disciplina: {
              create: {
                nome: 'Cálculo Numérico',
                codigo: 'DCC008',
              },
            },
            periodo: 4,
          },
          {
            disciplina: {
              create: {
                nome: 'Estrutura de Dados I',
                codigo: 'DCC012',
              },
            },
            periodo: 4,
          },
          {
            disciplina: {
              create: {
                nome: 'Organização de Computadores I',
                codigo: 'DCC070',
              },
            },
            periodo: 4,
          },
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
                nome: 'Equações Diferenciais I',
                codigo: 'MAT092',
              },
            },
            periodo: 4,
          },
          {
            disciplina: {
              create: {
                nome: 'Álgebra Linear',
                codigo: 'MAT158',
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
            periodo: 5,
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