

export type APIData = Record<string, any>;

export type APIResponse = {
  status: number;
  data: any;
};
export interface IEnvelope {
  response: {
    id: String,
    descricao?: String,
    conteudo?: String,
    Repositorio?: {
      id?: String
    },
    status?: String
  }
}


export type EnvelopeApiResponse = {
  status: number;
  data: IEnvelope;
};

