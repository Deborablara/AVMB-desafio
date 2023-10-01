import { prisma } from "..";
import { viewEnvelope } from "../../services/envelope";
import { APIData, APIResponse } from "../../services/types/api";



const formatEnvelopeData = async (idEnvelope: number) => {
  try {
    const envelopeDetailsData = await viewEnvelope({ idEnvelope });
    const envelopeData = envelopeDetailsData.data.response;


    const envelopeCreateInput = {
      id_envelope_api: envelopeData.id,
      id_repositorio_api: envelopeData.Repositorio.id,
      descricao: envelopeData.descricao,
      conteudo: envelopeData.conteudo,
      status: envelopeData.status,
    };

    return envelopeCreateInput;
  } catch (error) {
    throw new Error(error.message);
  }
};


export const createEnvelopeInDatabase = async (data: APIData) => {
  try {
    const formattedData = await formatEnvelopeData(data.response.data.idEnvelope);

    await prisma.envelope.create({
      data: formattedData,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export async function createDocumentoInDatabase(documentoData, id_envelope) {
  const doc = documentoData.Documento[0];

  const documentoCreateInput = {
    id_envelope: id_envelope,
    nome_arquivo: doc.nomeArquivo,
    conteudo: doc.conteudo,
    mimeType: doc.mimeType,
  };
  console.log(documentoCreateInput);


  try {
    const documento = await prisma.documento.create({
      data: documentoCreateInput,
    });

    return documento;
  } catch (error) {
    throw new Error('Falha ao criar documento no banco de dados');
  }
}

export async function getDocumentoByEnvelopeId(idEnvelope: string) {
  try {
    const documento = await prisma.documento.findFirst({
      where: {
        id_envelope: idEnvelope,
      },
    });

    return documento;
  } catch (error) {
    throw new Error('Erro ao buscar documento por ID de envelope: ' + error.message);
  }
}

