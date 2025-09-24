# Custom node para o desafio técnico da Onfly.  

Ele gera um número aleatório usando a API [Random.org](https://www.random.org/).

---

## Requisitos

- Node.js 22
- Docker + Docker Compose
- Git

---

## Como rodar

1. Clone o repositório:
   git clone https://github.com/ArthurGMoraes/onfly.git
   cd onfly

2. Instale as pacotes:
   cd custom/Random
   npm install
   

3. Suba os containers: 
   docker-compose up -d

4. Entre no container do n8n e instale o custom node:
   para achar <container_n8n> execute "docker ps" e verifique o CONTAINER ID
   docker exec -it <container_n8n> sh 
   cd ~/.n8n/custom/Random 
   npm install 
   npm run build

5. Reinicie o n8n:
   docker restart <container_n8n>

6. Acesse http://localhost:5678:
   crie um workflow no n8n
   adicione o node Random
   defina os parâmetros Min e Max e execute o workflow