


export type Documento = {
  conteudo: string;
  mimeType: string;
  nomeArquivo: string;
}

export type Repositorio = {
  id: string;
  nome?: string;
}


export type FormEnvelopeData = {
  token: string,
  params: {
    Envelope: {
      descricao: string;
      Repositorio: Repositorio;
      listaDocumentos: {
        Documento: Documento[];
      };
      listaSignatariosEnvelope?: {
        SignatarioEnvelope: any[];
      };
    }
  }
}
