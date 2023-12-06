-- CreateTable
CREATE TABLE `Curso` (
    `codigo` VARCHAR(5) NOT NULL,
    `nome` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Disciplina` (
    `codigo` VARCHAR(10) NOT NULL,
    `nome` VARCHAR(50) NOT NULL,
    `creditos` INTEGER NOT NULL DEFAULT 4,
    `dificuldade` ENUM('FACIL', 'MEDIO', 'DIFICIL') NOT NULL DEFAULT 'MEDIO',
    `ementa` VARCHAR(20) NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Material` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,
    `link` VARCHAR(100) NOT NULL,
    `disciplinaCodigo` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Turma` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `disciplinaCodigo` VARCHAR(10) NOT NULL,
    `codigoPeriodo` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Periodo` (
    `codigo` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Estudante` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,
    `nomeSocial` VARCHAR(50) NULL,
    `login` VARCHAR(50) NOT NULL,
    `senha` VARCHAR(25) NOT NULL,
    `cursoCodigo` VARCHAR(5) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GrupoEstudo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `diaSemana` ENUM('SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO') NOT NULL,
    `horario` VARCHAR(10) NULL,
    `local` VARCHAR(50) NULL DEFAULT 'Biblioteca',
    `vagas` INTEGER NOT NULL DEFAULT 1,
    `disciplinaCodigo` VARCHAR(10) NOT NULL,
    `adminId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Discussao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(50) NOT NULL,
    `descricao` VARCHAR(50) NOT NULL,
    `dataCriacao` DATETIME NOT NULL,
    `estudanteId` INTEGER NOT NULL,
    `disciplinaCodigo` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comentario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dataCriacao` DATETIME NOT NULL,
    `texto` VARCHAR(300) NOT NULL,
    `estudanteId` INTEGER NOT NULL,
    `discussaoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CursoDisciplina` (
    `codigoCurso` VARCHAR(5) NOT NULL,
    `codigoDisciplina` VARCHAR(10) NOT NULL,
    `periodo` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`codigoCurso`, `codigoDisciplina`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DisciplinaDisciplina` (
    `codigoPre` VARCHAR(10) NOT NULL,
    `codigoPos` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`codigoPre`, `codigoPos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EstudanteTurma` (
    `turmaId` INTEGER NOT NULL,
    `estudanteId` INTEGER NOT NULL,
    `status` ENUM('APROVADO', 'REPROVADO', 'MATRICULADO') NOT NULL DEFAULT 'MATRICULADO',

    PRIMARY KEY (`turmaId`, `estudanteId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GrupoEstudoEstudante` (
    `grupoEstudoId` INTEGER NOT NULL,
    `estudanteId` INTEGER NOT NULL,

    PRIMARY KEY (`grupoEstudoId`, `estudanteId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Material` ADD CONSTRAINT `Material_disciplinaCodigo_fkey` FOREIGN KEY (`disciplinaCodigo`) REFERENCES `Disciplina`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turma` ADD CONSTRAINT `Turma_disciplinaCodigo_fkey` FOREIGN KEY (`disciplinaCodigo`) REFERENCES `Disciplina`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turma` ADD CONSTRAINT `Turma_codigoPeriodo_fkey` FOREIGN KEY (`codigoPeriodo`) REFERENCES `Periodo`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Estudante` ADD CONSTRAINT `Estudante_cursoCodigo_fkey` FOREIGN KEY (`cursoCodigo`) REFERENCES `Curso`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GrupoEstudo` ADD CONSTRAINT `GrupoEstudo_disciplinaCodigo_fkey` FOREIGN KEY (`disciplinaCodigo`) REFERENCES `Disciplina`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GrupoEstudo` ADD CONSTRAINT `GrupoEstudo_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `Estudante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Discussao` ADD CONSTRAINT `Discussao_estudanteId_fkey` FOREIGN KEY (`estudanteId`) REFERENCES `Estudante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Discussao` ADD CONSTRAINT `Discussao_disciplinaCodigo_fkey` FOREIGN KEY (`disciplinaCodigo`) REFERENCES `Disciplina`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentario` ADD CONSTRAINT `Comentario_estudanteId_fkey` FOREIGN KEY (`estudanteId`) REFERENCES `Estudante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentario` ADD CONSTRAINT `Comentario_discussaoId_fkey` FOREIGN KEY (`discussaoId`) REFERENCES `Discussao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CursoDisciplina` ADD CONSTRAINT `CursoDisciplina_codigoCurso_fkey` FOREIGN KEY (`codigoCurso`) REFERENCES `Curso`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CursoDisciplina` ADD CONSTRAINT `CursoDisciplina_codigoDisciplina_fkey` FOREIGN KEY (`codigoDisciplina`) REFERENCES `Disciplina`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DisciplinaDisciplina` ADD CONSTRAINT `DisciplinaDisciplina_codigoPre_fkey` FOREIGN KEY (`codigoPre`) REFERENCES `Disciplina`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DisciplinaDisciplina` ADD CONSTRAINT `DisciplinaDisciplina_codigoPos_fkey` FOREIGN KEY (`codigoPos`) REFERENCES `Disciplina`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EstudanteTurma` ADD CONSTRAINT `EstudanteTurma_turmaId_fkey` FOREIGN KEY (`turmaId`) REFERENCES `Turma`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EstudanteTurma` ADD CONSTRAINT `EstudanteTurma_estudanteId_fkey` FOREIGN KEY (`estudanteId`) REFERENCES `Estudante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GrupoEstudoEstudante` ADD CONSTRAINT `GrupoEstudoEstudante_grupoEstudoId_fkey` FOREIGN KEY (`grupoEstudoId`) REFERENCES `GrupoEstudo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GrupoEstudoEstudante` ADD CONSTRAINT `GrupoEstudoEstudante_estudanteId_fkey` FOREIGN KEY (`estudanteId`) REFERENCES `Estudante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
