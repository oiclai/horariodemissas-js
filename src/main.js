import missas from "./pages/array.js";

document.getElementById("oeste").addEventListener("click", () => {
    let missasOeste = filterMissasByZona("Zona Oeste");
    renderModal(renderMissas(missasOeste))
});
document.getElementById("sul").addEventListener("click", () => {
    let missasSul = filterMissasByZona("Zona Sul");
    renderModal(renderMissas(missasSul))
});

document.getElementById("leste").addEventListener("click", () => { // presta
    let missasLeste = filterMissasByZona("Zona Leste");
    renderModal(renderMissas(missasLeste))
});

document.getElementById("norte").addEventListener("click", () => {
    let missasNorte = filterMissasByZona("Zona Norte");
    renderModal(renderMissas(missasNorte))
});

function filterMissasByZona(zona) {
    return missas.filter((missa) => missa.zona === zona);
}
// modal
function renderModal(content) {
    const modal = document.createElement("div");
    modal.className =
        "fixed top-0 right-0 h-screen w-[550px] bg-white shadow-lg z-50 overflow-auto";
    modal.innerHTML = `
    <div class= "max-h-[600px] overflow-auto relative border rounded-lg bg-neutral-200 p-1">
        <button class="absolute top-2 right-2 text-[#8C5383] font-bold" id="closeButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m7 7l10 10M7 17L17 7"/></svg>
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
    <div class="text-[#8C5383] missa border p-4 rounded bg-[#D7E7B3]">
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
renderMissas(missas);