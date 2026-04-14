# Prova Individual - MongoDB com Docker

Entrega preparada com `Docker + MongoDB + mongosh`, usando um banco chamado `escola` e a collection `alunos`.

## Estrutura

- `docker-compose.yml`: sobe o MongoDB em container.
- `scripts/init.js`: cria o banco, collection e insere 5 alunos.
- `scripts/queries.js`: executa todas as consultas solicitadas.
- `resultados/`: pasta para salvar prints da execução.

## Como executar

### 1. Subir o MongoDB

```powershell
docker compose up -d
```

### 2. Confirmar que o container está no ar

```powershell
docker ps
```

### 3. Executar todas as consultas da prova

```powershell
docker exec mongo-escola mongosh /scripts/queries.js
```

### 4. Salvar a saída em arquivo texto

```powershell
docker exec mongo-escola mongosh /scripts/queries.js > resultados/saida-consultas.txt
```

## Comandos utilizados

```powershell
docker compose up -d
docker ps
docker exec mongo-escola mongosh --eval "show dbs"
docker exec mongo-escola mongosh --eval "use escola"
docker exec mongo-escola mongosh --eval "db.alunos.find().pretty()"
docker exec mongo-escola mongosh /scripts/queries.js
docker exec mongo-escola mongosh /scripts/queries.js > resultados/saida-consultas.txt
```

## Consultas realizadas

1. Buscar todos os alunos.
2. Buscar alunos do curso `ADS`.
3. Buscar alunos com idade maior que `21`.
4. Atualizar a idade de um aluno.
5. Adicionar uma nova nota a um aluno.
6. Remover um aluno.
7. Calcular a média de notas por aluno.
8. Contar a quantidade de alunos por curso.

## Prints dos resultados

Salve os prints nesta pasta:

- `resultados/print-01-container.png`
- `resultados/print-02-todos-alunos.png`
- `resultados/print-03-consultas.png`

## Observacao

Os nomes, cursos e cidades foram variados para deixar a entrega diferente, mantendo todos os requisitos pedidos.