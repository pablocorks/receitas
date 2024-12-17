// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAvu6oaQDTEnf9do7PsgiiklYJig2gWIVc",
    authDomain: "receitas-be3d8.firebaseapp.com",
    databaseURL: "https://receitas-be3d8-default-rtdb.firebaseio.com",
    projectId: "receitas-be3d8",
    storageBucket: "receitas-be3d8.firebasestorage.app",
    messagingSenderId: "852039547622",
    appId: "1:852039547622:web:0c7fcf562ad90a589c1927"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Abrir o formulário de inserção
function abrirFormulario() {
    document.getElementById("popup").style.display = "block";
}

// Fechar o formulário de inserção
function fecharFormulario() {
    document.getElementById("popup").style.display = "none";
}

// Salvar medicamento no Firebase
function salvarMedicamento() {
    const nome = document.getElementById("nome").value;
    const dose = document.getElementById("dose").value;
    const quantidade = document.getElementById("quantidade").value;
    const instrucoes = document.getElementById("instrucoes").value;

    // Adiciona ao banco de dados
    db.ref("medicamentos").push({
        nome,
        dose,
        quantidade,
        instrucoes
    }).then(() => {
        alert("Medicamento adicionado com sucesso!");
        fecharFormulario();
        carregarMedicamentos();
    }).catch((error) => {
        console.error("Erro ao salvar medicamento:", error);
    });
}

// Carregar medicamentos do Firebase
function carregarMedicamentos() {
    const listaMedicamentos = document.getElementById("medicamentos");
    listaMedicamentos.innerHTML = "";

    db.ref("medicamentos").once("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const medicamento = childSnapshot.val();
            const li = document.createElement("li");
            li.textContent = `${medicamento.nome} - ${medicamento.dose} - ${medicamento.quantidade} - ${medicamento.instrucoes}`;
            listaMedicamentos.appendChild(li);
        });
    });
}

// Copiar Receita
function copiarReceita() {
    const receita = document.getElementById("receita").innerText;
    navigator.clipboard.writeText(receita).then(() => {
        alert("Receita copiada para a área de transferência!");
    }).catch((err) => {
        console.error("Erro ao copiar receita: ", err);
    });
}

// Carregar os medicamentos ao iniciar o site
carregarMedicamentos();
