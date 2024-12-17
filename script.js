// Abre popup
function abrirFormulario() {
  document.getElementById("popup").style.display = "block";
}

// Fecha popup
function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}

// Salva medicamento
function salvarMedicamento() {
  const nome = document.getElementById("nome").value;
  const dose = document.getElementById("dose").value;
  const marcas = document.getElementById("marcas").value;
  const instrucoes = document.getElementById("instrucoes").value;

  fetch('/medicamentos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, dose, marcas, instrucoes })
  }).then(() => {
    alert("Medicação adicionada com sucesso!");
    fecharPopup();
    carregarMedicamentos();
  });
}

// Carrega lista de medicamentos
function carregarMedicamentos() {
  fetch('/medicamentos')
    .then(response => response.json())
    .then(medicamentos => {
      let html = "<h2>Medicações</h2>";
      medicamentos.forEach(m => {
        html += `<div>${m.nome} - ${m.dose} <button>INSERIR</button> <button>EDITAR</button></div>`;
      });
      document.getElementById("lista-medicamentos").innerHTML = html;
    });
}

// Inicializa
carregarMedicamentos();
