import { prisma } from "..";
import { viewEnvelope } from "../../services/envelope";
import { APIData, APIResponse } from "../../services/types/api";
import { formatData } from "../../utils/api";



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


export const createEnvelopeInDatabase = async (data: APIData): Promise<APIResponse> => {
  try {
    const formattedData = await formatEnvelopeData(data.response.data.idEnvelope);

    const envelope = await prisma.envelope.create({
      data: formattedData,
    });

    return {
      status: 200,
      data: envelope,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};


