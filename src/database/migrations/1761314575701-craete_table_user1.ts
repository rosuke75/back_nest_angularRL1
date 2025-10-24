import { MigrationInterface, QueryRunner } from "typeorm";

export class CraeteTableUser11761314575701 implements MigrationInterface {
    name = 'CraeteTableUser11761314575701'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categoria" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "detalles" character varying NOT NULL, CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "direction" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "direction"`);
        await queryRunner.query(`DROP TABLE "categoria"`);
    }

}
