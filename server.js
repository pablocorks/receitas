const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Configuração
app.use(bodyParser.json());
app.use(express.static('public'));

// Banco de Dados SQLite
const db = new sqlite3.Database('database.sqlite');

// Cria tabela de medicamentos
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS medicamentos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    dose TEXT NOT NULL,
    marcas TEXT NOT NULL,
    instrucoes TEXT NOT NULL
  )`);
});

// Rota para listar medicamentos
app.get('/medicamentos', (req, res) => {
  db.all("SELECT * FROM medicamentos ORDER BY nome", (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
});

// Rota para adicionar medicamentos
app.post('/medicamentos', (req, res) => {
  const { nome, dose, marcas, instrucoes } = req.body;
  db.run("INSERT INTO medicamentos (nome, dose, marcas, instrucoes) VALUES (?, ?, ?, ?)",
    [nome, dose, marcas, instrucoes],
    function (err) {
      if (err) return res.status(500).send(err.message);
      res.json({ id: this.lastID });
    });
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
