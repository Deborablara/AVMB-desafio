/*
  Warnings:

  - You are about to drop the `envelopes_signatarios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `signatarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "envelopes_signatarios" DROP CONSTRAINT "envelopes_signatarios_id_envelope_fkey";

-- DropForeignKey
ALTER TABLE "envelopes_signatarios" DROP CONSTRAINT "envelopes_signatarios_id_signatario_fkey";

-- DropTable
DROP TABLE "envelopes_signatarios";

-- DropTable
DROP TABLE "signatarios";
