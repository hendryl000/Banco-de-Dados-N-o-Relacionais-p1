db = db.getSiblingDB("escola");

db.alunos.drop();

db.createCollection("alunos");

db.alunos.insertMany([
  {
    nome: "Joao Silva",
    idade: 20,
    curso: "ADS",
    notas: [7, 8, 9],
    endereco: {
      cidade: "Marica",
      estado: "RJ"
    }
  },
  {
    nome: "Ana Beatriz Costa",
    idade: 22,
    curso: "SI",
    notas: [9, 8, 10],
    endereco: {
      cidade: "Niteroi",
      estado: "RJ"
    }
  },
  {
    nome: "Carlos Henrique Lima",
    idade: 24,
    curso: "ADS",
    notas: [6, 7, 8],
    endereco: {
      cidade: "Sao Goncalo",
      estado: "RJ"
    }
  },
  {
    nome: "Marina Lopes Souza",
    idade: 21,
    curso: "BD",
    notas: [8, 8, 9],
    endereco: {
      cidade: "Itaborai",
      estado: "RJ"
    }
  },
  {
    nome: "Pedro Alves Rocha",
    idade: 23,
    curso: "Redes",
    notas: [5, 7, 6],
    endereco: {
      cidade: "Cabo Frio",
      estado: "RJ"
    }
  }
]);

print("Banco 'escola' e collection 'alunos' inicializados com 5 registros.");