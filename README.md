# AVMB-desafio

Instruções para executar o projeto.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- postgres

## Instalação

Um guia passo a passo sobre como instalar o projeto. 

1. **Clone o repositório:**

   https://github.com/Deborablara/AVMB-desafio.git

2. **Acesse o projeto baixado na sua ide de preferencia**
3. **comandos para rodar no terminal:**
   - yarn (para baixar as dependencias do projeto)
4. **Configuração do banco de dados:**
   - vá no arquivo **.env** e substitua a **DATABASE_URL** pela sua url local
   - crie no postgres uma base de dados chamada **avmb-desafio**
   - rode o comando no terminal **yarn prisma migrate dev** para rodar as migrações e criar as tabelas no banco de dados
  
5. **Depois de configurar com os passos acima:**
   - rode o comando **yarn start** para iniciar o servidor

6. **Acesso a documentação Swagger:**
   - acesse o navegador http://localhost:8080/docs para ter acesso a documentação de rotas da API

   
