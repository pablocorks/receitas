<!-- Inclua o SDK do Firebase no HTML -->
<script src="https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js"></script>

<script>
  // Configuração do Firebase fornecida
  const firebaseConfig = {
    apiKey: "AIzaSyAvu6oaQDTEnf9do7PsgiiklYJig2gWIVc",
    authDomain: "receitas-be3d8.firebaseapp.com",
    databaseURL: "https://receitas-be3d8-default-rtdb.firebaseio.com",
    projectId: "receitas-be3d8",
    storageBucket: "receitas-be3d8.firebasestorage.app",
    messagingSenderId: "852039547622",
    appId: "1:852039547622:web:0c7fcf562ad90a589c1927"
  };

  // Inicializa o Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  // Função para adicionar um medicamento no banco de dados
  function adicionarMedicamento(nome, dose, quantidade, instrucoes) {
    const medicamentosRef = db.ref("medicamentos");
    const novoMedicamento = {
      nome: nome,
      dose: dose,
      quantidade: quantidade,
      instrucoes: instrucoes
    };

    medicamentosRef.push(novoMedicamento)
      .then(() => {
        alert("Medicamento adicionado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao adicionar medicamento: ", error);
      });
  }

  // Exemplo de uso da função ao clicar em um botão
  document.getElementById("botaoAdicionar").addEventListener("click", () => {
    const nome = "Oxalato de Escitalopram";
    const dose = "10mg";
    const quantidade = "30 cp";
   
