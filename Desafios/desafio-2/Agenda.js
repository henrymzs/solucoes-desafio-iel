function verificarHorarioDisponivel(horarioProfessor, horarioDesejado) {
    function extrairIntervalo(horario) {
        const [inicio, fim] = horario.split(" às "); 
        return {
            inicio: parseInt(inicio.replace("h", "")), 
            fim: parseInt(fim.replace("h", "")) 
        };
    }
    
    const intervaloProfessor = extrairIntervalo(horarioProfessor);

    const horaDesejada = parseInt(horarioDesejado.replace("h", "")); 

    if (horaDesejada >= intervaloProfessor.inicio && horaDesejada <= intervaloProfessor.fim) {
        console.log("Horário disponível.");
    } else {
        console.log("Horário não disponível.");
    }
}

verificarHorarioDisponivel("8h às 12h", "10h"); 
verificarHorarioDisponivel("8h às 12h", "13h"); 
