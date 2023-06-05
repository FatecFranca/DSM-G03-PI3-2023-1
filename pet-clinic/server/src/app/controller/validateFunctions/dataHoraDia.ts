const obterDataHoraDiaSemana = (dataHora: string) => {
  const regex = /^(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2})$/;
  const match = regex.exec(dataHora);

  if (match) {
    const [_, dia, mes, ano, hora, minutos] = match;
    const data = new Date(
      parseInt(ano, 10),
      parseInt(mes, 10) - 1,
      parseInt(dia, 10)
    );
    const diaDaSemana = data.toLocaleDateString("pt-BR", {
      weekday: "long",
    });

    return {
      data: data.toLocaleDateString("pt-BR"),
      horario: `${hora}:${minutos}`,
      diaDaSemana: diaDaSemana,
    };
  }

  return null;
};

export default obterDataHoraDiaSemana;
