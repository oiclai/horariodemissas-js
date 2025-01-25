import "./style.css";

const missas = [
    {
        igreja: "Santuário Imaculada Conceição",
        bairro: "Tambauzinho",
        horario: "06h00",
        turno: "Manhã",
        dia: "Segunda-feira",
        zona: "zona leste",
    },
    {
        igreja: "Comunidade Nossa Senhora do Carmo",
        bairro: "Miramar",
        horario: "07h00",
        turno: "Manhã",
        dia: "Segunda-feira",
        zona: "Zona leste",
    },
    {
        igreja: "Comunidade Mel de Deus",
        bairro: "Cabo Branco",
        horario: "07h30",
        turno: "Manhã",
        dia: "Segunda-feira",
        zona: "Zona Leste",
    },
    {
        igreja: "Comunidade Católica Nova Berith",
        bairro: "Altiplano",
        horario: "17h30",
        turno: "Tarde",
        dia: "Segunda-feira",
        zona: "Zona Leste",
    },
    {
        igreja: "Paróquia Nossa Senhora Auxiliadora dos Cristãos",
        bairro: "Bessa",
        horario: "17h00",
        turno: "Tarde",
        dia: "Segunda-feira",
        zona: "Zona Leste",
    },
    {
        igreja: "Paróquia São Pedro São Paulo",
        bairro: "Brisamar",
        horario: "17h00",
        turno: "Tarde",
        dia: "Segunda-feira",
        zona: "Zona Leste",
    },
    {
        igreja: "Paróquia Nossa Senhora de Guadalupe",
        bairro: "Cabo Branco",
        horario: "17h00",
        turno: "Tarde",
        dia: "Segunda-feira",
        zona: "Zona Leste",
    },
    {
        igreja: "Paróquia Santo Antônio de Lisboa",
        bairro: "Tambaú",
        horario: "17h00",
        turno: "Tarde",
        dia: "Segunda-feira",
        zona: "Zona Leste",
    },
    {
        igreja: "Paróquia Nossa Senhora de Nazaré",
        bairro: "Jardim Oceania",
        horario: "17h30",
        turno: "Tarde",
        dia: "Segunda-feira",
        zona: "Zona Leste",
    },
    {
        igreja: "Obra Lumen - Casa Santa Teresa de Calcutá",
        bairro: "Tambauzinho",
        horario: "09h00",
        turno: "Manhã",
        dia: "Segunda-feira",
        zona: "Zona Leste",
    },
    {
        igreja: "Lar da Providência",
        bairro: "Bairro dos Estados",
        horario: "06h00",
        turno: "Manhã",
        dia: "Segunda-feira",
        zona: "Zona Norte",
    },
    {
        igreja: "Comunidade Em Adoração - Casa Mãe de Pentecostes",
        bairro: "Bairro dos Estados",
        horario: "07h00",
        turno: "Manhã",
        dia: "Segunda-feira",
        zona: "Zona Norte",
    },
    {
        igreja: "Comunidade Filhos da Misericórdia",
        bairro: "Ipês",
        horario: "18h15",
        turno: "Noite",
        dia: "Segunda-feira",
        zona: "Zona Norte",
    },
    {
        igreja: "Igreja da Misericórdia",
        bairro: "Centro",
        horario: "11h30",
        turno: "Manhã",
        dia: "Segunda-feira",
        zona: "Zona Norte",
    },
    {
        igreja: "Igreja São Gonçalo",
        bairro: "Torre",
        horario: "19h00",
        turno: "Noite",
        dia: "Segunda-feira",
        zona: "Zona Norte",
    },
    {
        igreja: "Paróquia Santa Júlia",
        bairro: "Torre",
        horario: "17h00",
        turno: "Tarde",
        dia: "Segunda-feira",
        zona: "Zona Norte",
    },
    {
        igreja: "Catebral Nossa Senhora das Neves",
        bairro: "Centro",
        horario: "12h00",
        turno: "Tarde",
        dia: "Segunda-feira",
        zona: "Zona Norte",
    },
    {
        igreja: "Paróquia Santo Inácio de Loyola",
        bairro: "Alto do Céu",
        horario: "18h30",
        turno: "Tarde",
        dia: "Segunda-feira",
        zona: "Zona Norte",
    },
    {
        igreja: "Paróquia Santo Inácio de Loyola",
        bairro: "Alto do Céu",
        horario: "18h30",
        turno: "Tarde",
        dia: "Segunda-feira",
        zona: "Zona Norte",
    },
    {
        igreja: "Casa de Acolhimento Bom Pastor",
        bairro: "Jaquaribe",
        horario: "06h30",
        turno: "Manhã",
        dia: "Segunda-feira",
        zona: "Zona Oeste",
    },
    {
        igreja: "Casa de Acolhimento Bom Pastor",
        bairro: "Jaquaribe",
        horario: "17h00",
        turno: "Tarde",
        dia: "Segunda-feira",
        zona: "Zona Oeste",
    },
    {
        igreja: "Paróquia Sagrado Coração de Jesus - Santa Nossa Senhora das Graças",
        bairro: "Mandacaru",
        horario: "19h30",
        turno: "Noite",
        dia: "Segunda-feira",
        zona: "Zona Oeste",
    },
    {
        igreja: "Paróquia São João Batista",
        bairro: "Costa e Silva",
        horario: "06h30",
        turno: "Manhã",
        dia: "Segunda-feira",
        zona: "Zona Sul",
    },
    {
        igreja: "Paróquia Jesus Cristo Rei",
        bairro: "Mangabeira I",
        horario: "18h45",
        turno: "Noite",
        dia: "Segunda-feira",
        zona: "Zona Sul",
    },
    {
        igreja: "Paróquia de Aparecida",
        bairro: "Valentina",
        horario: "19h00",
        turno: "Noite",
        dia: "Segunda-feira",
        zona: "Zona Sul",
    },
    {
        igreja: "Paróquia Santo Antônio do Menino Deus",
        bairro: "Jardim Cidade Universitária",
        horario: "19h30",
        turno: "Noite",
        dia: "Segunda-feira",
        zona: "Zona Sul",
    },
    {
        igreja: "Comunidade Doce Mãe de Deus - Casa Mãe",
        bairro: "Geisel",
        horario: "19h00",
        turno: "Noite",
        dia: "Segunda-feira",
        zona: "Zona Sul",
    },
    {
        igreja: "Comunidade Servos de Maria do Coração de Jesus",
        bairro: "Conde",
        horario: "18h00",
        turno: "Noite",
        dia: "Segunda-feira",
        zona: "Zona Sul",
    },
    {
        igreja: "Seminário Arquidiocesano da Paraíba",
        bairro: "Castelo Branco",
        horario: "11h30",
        turno: "Manhã",
        dia: "Segunda-feira",
        zona: "Zona Sul",
    },
];

// // Pegando div do HTML
// const listContainer = document.querySelector("#list");
// // const header = document.querySelector("#header"); // Ajuste o seletor conforme necessário
// // const search = document.querySelector("#search"); // Ajuste o seletor conforme necessário

// function render(missas) {
//     let list = "";

//     for (let i = 0; i < missas.length; i++) {
//         const missa = missas[i];
//         list += `
//       <div class='missa'>
//         <div class='missa-horario'>${missa.horario}</div>
//         <div class='missa-zona'>${missa.zona}</div>
//       </div>
//     `;
//     }

//     listContainer.innerHTML = list;
// }

// // Chama a função render passando o array de missas
// render(missas);
const listContainer = document.querySelector("#list");

function render(missas) {
    let list = "";

    // Iterando sobre o array de missas
    for (let i = 0; i < missas.length; i++) {
        const missa = missas[i];
        list += `
      <div class="missa">
        <h3>${missa.igreja}</h3>
        <p><strong>Horário:</strong> ${missa.horario}</p>
        <p><strong>Bairro:</strong> ${missa.bairro}</p>
        <p><strong>Turno:</strong> ${missa.turno}</p>
        <p><strong>Dia:</strong> ${missa.dia}</p>
        <p><strong>Zona:</strong> ${missa.zona}</p>
      </div>
    `;
    }

    // Inserindo a lista de missas na div
    listContainer.innerHTML = list;
}

// Chama a função render passando o array de missas
render(missas);