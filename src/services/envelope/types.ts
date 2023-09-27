

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
