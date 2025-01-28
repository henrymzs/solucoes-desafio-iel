function organizarRecados(recados) {
    recados.sort((a, b) => {
        const prioridadeA = a.prioridade.toLowerCase();
        const prioridadeB = b.prioridade.toLowerCase();

        if (prioridadeA === "importante" && prioridadeB === "regular") {
            return -1; 
        }
        if (prioridadeA === "regular" && prioridadeB === "importante") {
            return 1; 
        }

        const dataA = new Date(a.data);
        const dataB = new Date(b.data);
        return dataA - dataB; 
    });

    return recados;
}

const recados = [
    { mensagem: "Reunião agendada", prioridade: "Importante", data: "2025-01-12" },
    { mensagem: "Boletim disponível", prioridade: "Regular", data: "2025-01-13" },
    { mensagem: "Lembrete de evento", prioridade: "Importante", data: "2025-01-12" }
];

const recadosOrganizados = organizarRecados(recados);

recadosOrganizados.forEach(recado => {
    console.log(`${recado.mensagem} (${recado.prioridade}, ${recado.data})`);
});
