// server/index.ts
import express from 'express';
import { $Enums, PrismaClient } from '@prisma/client';

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
                dificuldade: $Enums.Dificuldade.FACIL,
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
                dificuldade: $Enums.Dificuldade.FACIL,
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
                dificuldade: $Enums.Dificuldade.FACIL,
              },
            },
            periodo: 1,
          },
          {
            disciplina: {
              create: {
                nome: 'Cálculo I',
                codigo: 'MAT154',
                dificuldade: $Enums.Dificuldade.DIFICIL,
              },
            },
            periodo: 1,
          },
          {
            disciplina: {
              create: {
                nome: 'Geometria Analítica e Sistemas Lineares',
                codigo: 'MAT155',
                dificuldade: $Enums.Dificuldade.DIFICIL,
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
                dificuldade: $Enums.Dificuldade.FACIL,
              },
            },
            periodo: 2,
          },
          {
            disciplina: {
              create: {
                nome: 'Física I',
                codigo: 'FIS073',
                dificuldade: $Enums.Dificuldade.DIFICIL,
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
                dificuldade: $Enums.Dificuldade.DIFICIL,
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
                dificuldade: $Enums.Dificuldade.DIFICIL,
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
                dificuldade: $Enums.Dificuldade.FACIL,
              },
            },
            periodo: 3,
          },
          {
            disciplina: {
              create: {
                nome: 'Lógica e Fundamentos da Computação',
                codigo: 'DCC160',
                dificuldade: $Enums.Dificuldade.FACIL,
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
                dificuldade: $Enums.Dificuldade.DIFICIL,
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
                nome: 'Estrutura de Dados II',
                codigo: 'DCC012',
                dificuldade: $Enums.Dificuldade.DIFICIL,
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
                dificuldade: $Enums.Dificuldade.DIFICIL,
              },
            },
            periodo: 4,
          },
          {
            disciplina: {
              create: {
                nome: 'Teoria dos Grafos',
                codigo: 'DCC059',
                dificuldade: $Enums.Dificuldade.DIFICIL,
              },
            },
            periodo: 5,
          },
          {
            disciplina: {
              create: {
                nome: 'Banco de Dados',
                codigo: 'DCC060',
              },
            },
            periodo: 5,
          },
          {
            disciplina: {
              create: {
                nome: 'Engenharia de Software',
                codigo: 'DCC061',
              },
            },
            periodo: 5,
          },
          {
            disciplina: {
              create: {
                nome: 'Sistemas Operacionais',
                codigo: 'DCC062',
              },
            },
            periodo: 5,
          },
          {
            disciplina: {
              create: {
                nome: 'Computação Gráfica',
                codigo: 'DCC065',
                dificuldade: $Enums.Dificuldade.DIFICIL,
              },
            },
            periodo: 5,
          },
          {
            disciplina: {
              create: {
                nome: 'Metodologia Científica',
                codigo: 'DCC203',
                creditos: 2,
              },
            },
            periodo: 5,
          },
          {
            disciplina: {
              create: {
                nome: 'Linguagem de Programação',
                codigo: 'DCC019',
              },
            },
            periodo: 6,
          },
          {
            disciplina: {
              create: {
                nome: 'Redes de Computadores',
                codigo: 'DCC042',
              },
            },
            periodo: 6,
          },
          {
            disciplina: {
              create: {
                nome: 'Linguagens Fornais e Autômatos',
                codigo: 'DCC063',
              },
            },
            periodo: 6,
          },
          {
            disciplina: {
              create: {
                nome: 'Pesquisa Operacional',
                codigo: 'DCC163',
              },
            },
            periodo: 6,
          },
          {
            disciplina: {
              create: {
                nome: 'Interação Humano-Computador',
                codigo: 'DCC174',
              },
            },
            periodo: 6,
          },
          {
            disciplina: {
              create: {
                nome: 'Informática e SOciendade',
                codigo: 'EADDCC044',
                creditos: 2,
              },
            },
            periodo: 6,
          },
          {
            disciplina: {
              create: {
                nome: 'Análise e Projeto de Algoritmos',
                codigo: 'DCC001',
              },
            },
            periodo: 7,
          },
          {
            disciplina: {
              create: {
                nome: 'Inteligência Artificial',
                codigo: 'DCC014',
                dificuldade: $Enums.Dificuldade.DIFICIL,
              },
            },
            periodo: 7,
          },
          {
            disciplina: {
              create: {
                nome: 'Teoria da Computação',
                codigo: 'DCC055',
              },
            },
            periodo: 7,
          },
          {
            disciplina: {
              create: {
                nome: 'Segurança em Sistemas de Computação',
                codigo: 'DCC075',
              },
            },
            periodo: 7,
          },
          {
            disciplina: {
              create: {
                nome: 'Trabalho de Conclusão de Curso I',
                codigo: 'DCC204',
                creditos: 0,
              },
            },
            periodo: 7,
          },
          {
            disciplina: {
              create: {
                nome: 'Cálculo de Probabilidades I',
                codigo: 'EST029',
              },
            },
            periodo: 7,
          },
          {
            disciplina: {
              create: {
                nome: 'Teoria dos Compiladores',
                codigo: 'DCC045',
              },
            },
            periodo: 8,
          },
          {
            disciplina: {
              create: {
                nome: 'Sistemas Distribuídos',
                codigo: 'DCC064',
              },
            },
            periodo: 8,
          },
          {
            disciplina: {
              create: {
                nome: 'Trabalho de Conclusão de Curso II',
                codigo: 'DCC205',
                creditos: 0,
              },
            },
            periodo: 8,
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
                codigo: 'DCC199',
              },
            },
            periodo: 1,
          },
          {
            disciplina: {
              connect: {
                codigo: 'DC5199',
              },
            },
            periodo: 1,
          },
          {
            disciplina: {
              connect: {
                codigo: 'FIS122',
              },
            },
            periodo: 1,
          },
          {
            disciplina: {
              connect: {
                codigo: 'ICE001',
              },
            },
            periodo: 1,
          },
          {
            disciplina: {
              connect: {
                codigo: 'MAT154',
              },
            },
            periodo: 1,
          },
          {
            disciplina: {
              connect: {
                codigo: 'MAT155',
              },
            },
            periodo: 1,
          },
          {
            disciplina: {
              connect: {
                codigo: 'QUI125',
              },
            },
            periodo: 1,
          },
          {
            disciplina: {
              connect: {
                codigo: 'QUI126',
              },
            },
            periodo: 1,
          },
          {
            disciplina: {
              connect: {
                codigo: 'DCC200',
              },
            },
            periodo: 2,
          },
          {
            disciplina: {
              connect: {
                codigo: 'DC5200',
              },
            },
            periodo: 2,
          },
          {
            disciplina: {
              connect: {
                codigo: 'EST028',
              },
            },
            periodo: 2,
          },
          {
            disciplina: {
              connect: {
                codigo: 'FIS073',
              },
            },
            periodo: 2,
          },
          {
            disciplina: {
              connect: {
                codigo: 'FIS077',
              },
            },
            periodo: 2,
          },
          {
            disciplina: {
              connect: {
                codigo: 'MAT156',
              },
            },
            periodo: 2,
          },
          {
            disciplina: {
              connect: {
                codigo: 'QUI168',
              },
            },
            periodo: 2,
          },
          {
            disciplina: {
              connect: {
                codigo: 'DCC013',
              },
            },
            periodo: 3,
          },
          {
            disciplina: {
              connect: {
                codigo: 'DCC025',
              },
            },
            periodo: 3,
          },
          {
            disciplina: {
              connect: {
                codigo: 'EST029',
              },
            },
            periodo: 3,
          },
          {
            disciplina: {
              connect: {
                codigo: 'MAT157',
              },
            },
            periodo: 3,
          },
          {
            disciplina: {
              connect: {
                codigo: 'DCC008',
              },
            },
            periodo: 4,
          },
          {
            disciplina: {
              connect: {
                codigo: 'DCC012',
              },
            },
            periodo: 4,
          },
          {
            disciplina: {
              connect: {
                codigo: 'MAT158',
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
            periodo: 5,
          },
          {
            disciplina: {
              connect: {
                codigo: 'DCC122',
              },
            },
            periodo: 5,
          },
          
          {
            disciplina: {
              connect: {
                codigo: 'DCC070',
              },
            },
            periodo: 6,
          },
          {
            disciplina: {
              connect: {
                codigo: 'DCC117',
              },
            },
            periodo: 6,
          },
          {
            disciplina: {
              connect: {
                codigo: 'DCC001',
              },
            },
            periodo: 7,
          },
          {
            disciplina: {
              connect: {
                codigo: 'DCC060',
              },
            },
            periodo: 7,
          },
          {
            disciplina: {
              connect: {
                codigo: 'DCC062',
              },
            },
            periodo: 7,
          },
          {
            disciplina: {
              connect: {
                codigo: 'DCC042',
              },
            },
            periodo: 8,
          },
          {
            disciplina: {
              connect: {
                codigo: 'DCC163',
              },
            },
            periodo: 8,
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