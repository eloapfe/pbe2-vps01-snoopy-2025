# SNOOPY PetShop API
Situação de Aprendizagem - Back-End (Node.JS, JavaSript, VsCode, ORM Prisma, Insomnia)
## Contextualização
SNOOPY PetShop tem atuado em nossa cidade com ótimo atendimento e agilidade, é nosso cliente e necessita de um sistema Web para registro dos seus pedidos no balcão.<br>O P.O. após uma visita ao cliente elaborou o DER e UML DC(Diagrama de Classes) a seguir e elencou os requisitos funcionais.<br>
![DER e DC](./docs/snoopy-der-dc.png)


## Tecnologias
- Node.js
- Prisma
- XAMPP
- MySQL
- VsCode
- Insomnia

DATABASE_URL="mysql://root:@localhost:3306/snoopy_petshop"
```
- 5 Abra o terminal **CTRL + '** cmd ou bash, navegue até a pasta API e execute os comandos
````bash
cd api
npm install
npx prisma migrate dev --name init
npx nodemon
# ou
npm start
````
- 6 Abra o **Insomnia** e importe o arquivo **./docs/insomnia.json** para testar as rotas.

- 7 Caso queira visualizar o banco de dados, abra o **XAMPP** Control Panel e clique em **Admin** no módulo MySQL.
    - O arquivo ./docs/testes.sql é um script com dados de teste para inserir no banco de dados.

- 8 Para parar a execução do servidor, pressione **CTRL + C** no terminal.

## Passo a Passo de como executar a API
- 1 Clone este **repositório**
- 2 Abra o **XAMPP** Control Panel e inicie o Apache e o MySQL
- 3 Abra com o repositorio com **VsCode**
- 4 Crie o arquivo .env na pasta API e adicione as seguintes variáveis de ambiente.