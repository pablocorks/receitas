const medications = {
  "Oxalato de Escitalopram": {
    usage: ["USO ORAL"],
    doses: ["10mg", "15mg", "20mg"],
    brands: ["Reconter®", "Fusor®", "Esc®", "Eudok®"],
    instructions: [
      "Durante os 10 primeiros dias, tomar meio comprimido. A partir do 11º dia, iniciar 1 comprimido por dia. Sempre pela manhã, após se alimentar, no mesmo horário.",
      "Tomar 1 comprimido por dia. Sempre pela manhã, após se alimentar, no mesmo horário.",
      "Tomar 1 comprimido por dia Antes de dormir, no mesmo horário."
    ]
  },
  "Cloridrato de Sertralina": {
    usage: ["USO ORAL"],
    doses: ["25mg", "50mg", "100mg"],
    brands: ["Zoloft®", "Assert®", "Serenata®", "Tolrest®", "Afetus®"],
    instructions: [
      "Durante os 10 primeiros dias, tomar meio comprimido. A partir do 11º dia, iniciar 1 comprimido por dia. Sempre pela manhã, após se alimentar, no mesmo horário.",
      "Tomar 1 comprimido por dia. Sempre pela manhã, após se alimentar, no mesmo horário.",
      "Tomar 1 comprimido por dia Antes de dormir, no mesmo horário."
    ]
  },
  "Cloridrato de Bupropiona XL": {
    usage: ["USO ORAL"],
    doses: ["150mg", "300mg"],
    brands: ["Alpes XL®", "Bup XL®", "Bupium XL®", "Seth®", "Zetron XL®"],
    instructions: [
      "Tomar 1 comprimido por dia. Sempre pela manhã, após se alimentar, no mesmo horário."
    ]
  }
};

let prescriptionList = [];

function openPrescModal(medication) {
  const medData = medications[medication];
  const usageForm = medData.usage[0]; // Assuming one form per medication for simplicity
  const dose = medData.doses.join(", ");
  const brands = medData.brands.join(", ");
  const instructions = medData.instructions.join("\n\n");

  let prescriptionText = `
    ${usageForm}
    ${prescriptionList.length + 1} - ${medication} ${dose} ________ 30 cp
    (${brands})
    - ${instructions}
  `;
  prescriptionList.push(prescriptionText);
  updatePrescriptionOutput();
}

function updatePrescriptionOutput() {
  const prescriptionText = prescriptionList.join("\n\n");
  document.getElementById('prescription-text').value = prescriptionText;
}

function copyToClipboard() {
  const text = document.getElementById('prescription-text');
  text.select();
  document.execCommand('copy');
}

function openAddMedicationModal() {
  document.getElementById('add-medication-modal').style.display = 'block';
}

function saveMedication() {
  const form = document.getElementById('add-medication-form');
  const medicationData = {
    usage: [form.querySelector('#add-usage-form').value],
    doses: [form.querySelector('#add-dose').value],
    brands: [form.querySelector('#add-brand').value],
    instructions: [form.querySelector('#add-instructions').value],
  };

  medications[form.querySelector('#add-medication-name').value] = medicationData;
  document.getElementById('add-medication-modal').style.display = 'none';
  alert('Medicação salva com sucesso!');
}

function editMedication(medication) {
  alert('Funcionalidade de edição ainda não implementada.');
}
