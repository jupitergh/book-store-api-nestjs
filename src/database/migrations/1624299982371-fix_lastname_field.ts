import {MigrationInterface, QueryRunner} from "typeorm";

export class fixLastnameField1624299982371 implements MigrationInterface {
    name = 'fixLastnameField1624299982371'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `author` CHANGE `lastName` `last_name` varchar(255) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `author` CHANGE `last_name` `lastName` varchar(255) NULL");
    }

}
