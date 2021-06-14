# CSV Reader

### Um script criado para ler dados de um arquivo CSV e inseri-los no Banco.  

## Instalação
#### O Comando a seguir irá instalar todas as dependências necessárias:
```shell
$ npm install
```

## Configuração
#### É necessário criar um arquivo `.env` na raiz do projeto, seguindo o exemplo do arquivo `.env.example`, mas com as suas credenciais.  
#### Os arquivos `.csv` que serão lidos precisam estar na raiz do projeto. Cada arquivo precisa ter o mesmo nome que a sua respectiva tabela no banco.
#### Os nomes dos campos no `.csv` precisam ser iguais aos nomes das colunos no banco.

## Inicialização
#### Após tudo configurado basta rodar o seguinte comando:
```shell
$ npm run serve
```