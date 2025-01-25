// import missas from "./src/main.js";

// const div = document.getElementById("app");

// let htmlContent = "";

// for (const obj of missas) {
//     htmlContent += `
//     <div class="missa-item">
//         <p class="missa-name">${obj["missa.bairro"]}</p>
//     </div>
//     `;
// }
// div.innerHTML = htmlContent;
// Estrutura principal do código para dinamizar horários de missas

// Dados das missas
const missas = [
  {
    igreja: "Santuário Imaculada Conceição",
    bairro: "Tambauzinho",
    horario: "06h00",
    turno: "Manhã",
    dia: "Segunda-feira",
    zona: "Zona Leste",
  },
  {
    igreja: "Comunidade Nossa Senhora do Carmo",
    bairro: "Miramar",
    horario: "07h00",
    turno: "Manhã",
    dia: "Segunda-feira",
    zona: "Zona Leste",
  },
  // Adicione mais missas conforme necessário
];

// Salvar dados no localStorage
localStorage.setItem("missas", JSON.stringify(missas));

// Função para renderizar missas
function renderMissas(container, missas) {
  container.innerHTML = missas
    .map(
      (missa) => `
        <div class="missa">
          <h3>${missa.dia} - ${missa.turno}</h3>
          <p><strong>Horário:</strong> ${missa.horario}</p>
          <p><strong>Igreja:</strong> ${missa.igreja}</p>
          <p><strong>Bairro:</strong> ${missa.bairro} (${missa.zona})</p>
        </div>
      `
    )
    .join("");
}

// Executar após o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const missasSalvas = JSON.parse(localStorage.getItem("missas")) || [];
  renderMissas(app, missasSalvas);
});
