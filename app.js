// function carregarHorarios() {
//     fetch('horarios.json')
//         .then(response => response.json()) 
//         .then(data => {
//             exibirHorarios(data);
//         })
//         .catch(err => console.error('Erro ao carregar os horários:', err));
// }
// function exibirHorarios(horariosMissas) {
//     const tabela = document.getElementById('tabela-missas');
//     tabela.innerHTML = '';

//     horariosMissas.forEach(missa => {
//         const linha = document.createElement('tr');
//         linha.innerHTML = `
//             <td>${missa.igreja}</td>
//             <td>${missa.bairro}</td>
//             <td>${missa.horario}</td>
//             <td>${missa.turno}</td>
//             <td>${missa.dia}</td>
//         `;
//         tabela.appendChild(linha);
//     });
// }

// document.addEventListener('DOMContentLoaded', carregarHorarios);
