/*
  Warnings:

  - Added the required column `mimeType` to the `documentos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "documentos" DROP CONSTRAINT "documentos_id_envelope_fkey";

-- AlterTable
ALTER TABLE "documentos" ADD COLUMN     "mimeType" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "documentos" ADD CONSTRAINT "documentos_id_envelope_fkey" FOREIGN KEY ("id_envelope") REFERENCES "envelopes"("id_envelope_api") ON DELETE RESTRICT ON UPDATE CASCADE;
