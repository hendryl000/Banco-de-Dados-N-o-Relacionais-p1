db = db.getSiblingDB("escola");

function titulo(texto) {
  print("\n==================================================");
  print(texto);
  print("==================================================");
}

titulo("1. Buscar todos os alunos");
printjson(db.alunos.find().sort({ nome: 1 }).toArray());

titulo("2. Buscar alunos do curso ADS");
printjson(db.alunos.find({ curso: "ADS" }).sort({ nome: 1 }).toArray());

titulo("3. Buscar alunos com idade maior que 21");
printjson(db.alunos.find({ idade: { $gt: 21 } }).sort({ idade: 1 }).toArray());

titulo("4. Atualizar a idade de um aluno");
printjson(db.alunos.updateOne(
  { nome: "Joao Silva" },
  { $set: { idade: 21 } }
));
printjson(db.alunos.findOne({ nome: "Joao Silva" }));

titulo("5. Adicionar uma nova nota a um aluno");
printjson(db.alunos.updateOne(
  { nome: "Ana Beatriz Costa" },
  { $push: { notas: 9.5 } }
));
printjson(db.alunos.findOne({ nome: "Ana Beatriz Costa" }));

titulo("6. Remover um aluno");
printjson(db.alunos.deleteOne({ nome: "Pedro Alves Rocha" }));
print("Total de alunos restantes: " + db.alunos.countDocuments());

titulo("7. Media de notas por aluno");
printjson(db.alunos.aggregate([
  {
    $project: {
      _id: 0,
      nome: 1,
      media: { $round: [{ $avg: "$notas" }, 2] }
    }
  },
  {
    $sort: { media: -1, nome: 1 }
  }
]).toArray());

titulo("8. Quantidade de alunos por curso");
printjson(db.alunos.aggregate([
  {
    $group: {
      _id: "$curso",
      quantidade: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      curso: "$_id",
      quantidade: 1
    }
  },
  {
    $sort: { curso: 1 }
  }
]).toArray());