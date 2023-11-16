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
    `creditos` INTEGER NOT NULL,
    `cursoCodigo` VARCHAR(5) NOT NULL,
    `periodo` INTEGER NOT NULL,
    `dificuldade` INTEGER NOT NULL,
    `ementa` VARCHAR(20) NOT NULL,
    `materiais` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Turma` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `disciplinaCodigo` VARCHAR(10) NOT NULL,
    `codigoPeriodo` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Estudante` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,
    `login` VARCHAR(50) NOT NULL,
    `senha` VARCHAR(25) NOT NULL,
    `cursoCodigo` VARCHAR(5) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EstudanteTurma` (
    `turmaId` INTEGER NOT NULL,
    `estudanteId` INTEGER NOT NULL,
    `status` ENUM('APROVADO', 'REPROVADO', 'MATRICULADO') NOT NULL DEFAULT 'MATRICULADO',

    PRIMARY KEY (`turmaId`, `estudanteId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Disciplina` ADD CONSTRAINT `Disciplina_cursoCodigo_fkey` FOREIGN KEY (`cursoCodigo`) REFERENCES `Curso`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turma` ADD CONSTRAINT `Turma_disciplinaCodigo_fkey` FOREIGN KEY (`disciplinaCodigo`) REFERENCES `Disciplina`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Estudante` ADD CONSTRAINT `Estudante_cursoCodigo_fkey` FOREIGN KEY (`cursoCodigo`) REFERENCES `Curso`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EstudanteTurma` ADD CONSTRAINT `EstudanteTurma_turmaId_fkey` FOREIGN KEY (`turmaId`) REFERENCES `Turma`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EstudanteTurma` ADD CONSTRAINT `EstudanteTurma_estudanteId_fkey` FOREIGN KEY (`estudanteId`) REFERENCES `Estudante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
