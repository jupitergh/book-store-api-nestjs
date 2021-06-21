import { MigrationInterface, QueryRunner } from 'typeorm'

export class fixAuthorField1624291756805 implements MigrationInterface {
  name = 'fixAuthorField1624291756805'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `book` DROP FOREIGN KEY `FK_66a4f0f47943a0d99c16ecf90b2`')
    await queryRunner.query('ALTER TABLE `book` CHANGE `authorId` `author_id` int NULL')
    await queryRunner.query('ALTER TABLE `book` CHANGE `author_id` `author_id` int NOT NULL')
    await queryRunner.query('ALTER TABLE `book` ADD CONSTRAINT `FK_24b753b0490a992a6941451f405` FOREIGN KEY (`author_id`) REFERENCES `author`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `book` DROP FOREIGN KEY `FK_24b753b0490a992a6941451f405`')
    await queryRunner.query('ALTER TABLE `book` CHANGE `author_id` `author_id` int NULL')
    await queryRunner.query('ALTER TABLE `book` CHANGE `author_id` `authorId` int NULL')
    await queryRunner.query('ALTER TABLE `book` ADD CONSTRAINT `FK_66a4f0f47943a0d99c16ecf90b2` FOREIGN KEY (`authorId`) REFERENCES `author`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION')
  }
}
