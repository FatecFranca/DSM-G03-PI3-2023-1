import {
  getJornadaVeterinario,
  verificaHorarioConsulta,
} from "./verificaHorarioConsulta";

const diaDaSemana = (data: string): string => {
  const diasDaSemana: string[] = [
    "domingo",
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
  ];
  const [dia, mes, ano] = data.split("/");
  const dataObj = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia));
  return diasDaSemana[dataObj.getDay()];
};

const getHalfHourIntervals = (start: string, end: string): string[] => {
  const result: string[] = [];
  const startTime = new Date(`1970/01/01 ${start}`);
  const endTime = new Date(`1970/01/01 ${end}`);

  while (startTime < endTime) {
    result.push(startTime.toTimeString().slice(0, 5));
    startTime.setMinutes(startTime.getMinutes() + 30);
  }

  return result;
};

const getHorarioVet = async (vet_id: string, date: string) => {
  const dia = diaDaSemana(date);
  const jornada = await getJornadaVeterinario(vet_id, dia);
  const jornadaDeTrabalho = getHalfHourIntervals(
    jornada?.horaInicio || "",
    jornada?.horaFim || ""
  );

  const horarioDispponivel = jornadaDeTrabalho.filter(
    async (time) => await verificaHorarioConsulta(vet_id, `${date} ${time}`)
  );

  return horarioDispponivel;
};

export default getHorarioVet;
