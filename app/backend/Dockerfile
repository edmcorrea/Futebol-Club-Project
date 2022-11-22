FROM node:16.14-alpine
WORKDIR /app-backend
COPY package* ./
RUN npm install
  # o 'node_modules' está sendo compactado e o '.' joga na raiz do projeto.
  # aqui tambem pode ser usado o 'COPY node_modules.tar.gz .'
  # o 'ADD' funciona para imagens externas. No caso desse projeto, para imagens internas o 'COPY' funciona normalmente
COPY . .
EXPOSE 3001
CMD [ "npm", "start" ] 
  # aqui tambem pode ser usado o 'ENTRYPOINT [ "npm", "start" ]'
