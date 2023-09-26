-- CreateTable
CREATE TABLE "repositorios" (
    "id" TEXT NOT NULL,
    "id_repo_api" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "repositorios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "envelopes" (
    "id" TEXT NOT NULL,
    "id_envelope_api" INTEGER NOT NULL,
    "id_repositorio" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,

    CONSTRAINT "envelopes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documentos" (
    "id" TEXT NOT NULL,
    "id_envelope" TEXT NOT NULL,
    "nome_arquivo" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,

    CONSTRAINT "documentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "signatarios" (
    "id" TEXT NOT NULL,
    "id_signatario_api" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "signatarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "envelopes_signatarios" (
    "id" TEXT NOT NULL,
    "id_signatario" TEXT NOT NULL,
    "id_envelope" TEXT NOT NULL,

    CONSTRAINT "envelopes_signatarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "repositorios_nome_key" ON "repositorios"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "envelopes_id_envelope_api_key" ON "envelopes"("id_envelope_api");

-- CreateIndex
CREATE UNIQUE INDEX "signatarios_id_signatario_api_key" ON "signatarios"("id_signatario_api");

-- CreateIndex
CREATE UNIQUE INDEX "signatarios_email_key" ON "signatarios"("email");

-- AddForeignKey
ALTER TABLE "envelopes" ADD CONSTRAINT "envelopes_id_repositorio_fkey" FOREIGN KEY ("id_repositorio") REFERENCES "repositorios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documentos" ADD CONSTRAINT "documentos_id_envelope_fkey" FOREIGN KEY ("id_envelope") REFERENCES "envelopes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "envelopes_signatarios" ADD CONSTRAINT "envelopes_signatarios_id_signatario_fkey" FOREIGN KEY ("id_signatario") REFERENCES "signatarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "envelopes_signatarios" ADD CONSTRAINT "envelopes_signatarios_id_envelope_fkey" FOREIGN KEY ("id_envelope") REFERENCES "envelopes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
