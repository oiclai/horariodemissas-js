import missas from "./pages/array.js";


document.getElementById("oeste").addEventListener("click", () => {
    let missasOeste = filterMissasByZona("zona oeste");
});
document.getElementById("sul").addEventListener("click", () => {
    let missasSul = filterMissasByZona("zona sul");
});

document.getElementById("leste").addEventListener("click", () => {
    let missasLeste = filterMissasByZona("zona leste");
});

document.getElementById("norte").addEventListener("click", () => {
    let missasNorte = filterMissasByZona("zona norte");
});

function filterMissasByZona(zona) {
    return missas.filter((missa) => missa.zona === zona);
}

function renderModal(content) {
    const modal = document.createElement("div");
    modal.className= "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50";
    modal.innerHTML = `
    <div class= "max-h-[600px] overflow-auto relative border rounded-lg bg-neutral-200 p-1">
        <button class="sticky top-3 text-neutral-900" id="closeButton">
        aa
        </button>
        ${content}
    </div>
    `;


    document.body.appendChild(modal);
    document.getElementById("closeButton").addEventListener("click", () => {
        document.body.removeChild(modal);
});
}
function renderMissas(missas) {
    let list = missas
        .map(
            (missa) => `
    <div class="missa border p-4 rounded bg-gray-100">
      <h3 class="font-bold text-lg">${missa.igreja}</h3>
      <p><strong>Horário:</strong> ${missa.horario}</p>
      <p><strong>Bairro:</strong> ${missa.bairro}</p>
      <p><strong>Turno:</strong> ${missa.turno}</p>
      <p><strong>Dia:</strong> ${missa.dia}</p>
    </div>`
        )
        .join("");
    return list;
}

// Inicializa com todas as missas
renderMissas(missas);
