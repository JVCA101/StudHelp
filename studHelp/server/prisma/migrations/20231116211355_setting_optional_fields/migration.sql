-- AlterTable
ALTER TABLE `disciplina` MODIFY `ementa` VARCHAR(20) NULL,
    MODIFY `materiais` VARCHAR(20) NULL;

-- AlterTable
ALTER TABLE `estudante` ADD COLUMN `nomeSocial` VARCHAR(50) NULL;
