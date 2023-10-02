import { prisma } from "..";
import { viewEnvelope } from "../../services/envelope";
import { APIData } from "../../services/types/api";



const formatEnvelopeData = async (idEnvelope: number, token: string) => {
  const format = {
    token,
    params: {
      idEnvelope: idEnvelope,
    }
  };

  try {
    const envelopeDetailsData = await viewEnvelope(format);
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


export const createEnvelopeInDatabase = async (data: APIData, token: string) => {
  try {
    const formattedData = await formatEnvelopeData(data.response.data.idEnvelope, token);

    await prisma.envelope.create({
      data: formattedData,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export async function createDocumentInDatabase(documentData, id_envelope) {
  const doc = documentData.Documento[0];

  const documentoCreateInput = {
    id_envelope: id_envelope,
    nome_arquivo: doc.nomeArquivo,
    conteudo: doc.conteudo,
    mimeType: doc.mimeType,
  };


  try {
    const documento = await prisma.documento.create({
      data: documentoCreateInput,
    });

    return documento;
  } catch (error) {
    return 'Falha ao criar documento no banco de dados';
  }
}

export async function getDocumentByEnvelopeId(idEnvelope: string) {
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

