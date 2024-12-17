const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO.firebaseapp.com",
  databaseURL: "https://SEU_PROJETO.firebaseio.com",
  projectId: "SEU_ID",
  storageBucket: "SEU_BUCKET.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SUA_APP_ID"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function abrirPopup() {
  document.getElementById("popup").style.display = "block";
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}

function salvarMedicacao() {
  const nome = document.getElementById("nome-remedio").value;
  const quantidade = document.getElementById("quantidade-remedio").value;

  db.ref('medicacoes/').push({
    nome,
    quantidade
  });

  alert("Medicação salva!");
  fecharPopup();
  carregarMedicacoes();
}

function carregarMedicacoes() {
  const lista = document.getElementById("lista-medicamentos");
  lista.innerHTML = "";

  db.ref('medicacoes/').once('value', (snapshot) => {
    snapshot.forEach((child) => {
      const med = child.val();
      lista.innerHTML += `<p>${med.nome} - ${med.quantidade} cp</p>`;
    });
  });
}

carregarMedicacoes();
