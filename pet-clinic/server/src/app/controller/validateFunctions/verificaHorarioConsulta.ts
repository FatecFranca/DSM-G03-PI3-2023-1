import { consulta as consultaModel } from "../../models/consulta";
import obterDataHoraDiaSemana from "./dataHoraDia";
import { Veterinario as vetModel } from "../../models/veterinario";

export const verificaHorarioConsulta = async (
  vet_id: string,
  date_time: string
) => {
  return (await consultaModel.findOne({
    date_time,
    vet_id,
  }))
    ? false
    : true;
};

export const getJornadaVeterinario = async (id: string, dia: any) => {
  const response = await vetModel.find({
    _id: id,
  });

  const jornada = response[0].jornada;

  const jornadaDia = jornada?.[dia as keyof typeof jornada];

  return response != null ? jornadaDia : null;
};

const verificarHorarioDeTrabalho = (
  horarioInicio: string,
  horarioFim: string,
  horarioConsulta: string
): boolean => {
  const formatoHora = /^(\d{2}):(\d{2})$/;
  const matchInicio = formatoHora.exec(horarioInicio);
  const matchFim = formatoHora.exec(horarioFim);
  const matchConsulta = formatoHora.exec(horarioConsulta);

  if (matchInicio && matchFim && matchConsulta) {
    const horaInicio = parseInt(matchInicio[1], 10);
    const minutoInicio = parseInt(matchInicio[2], 10);
    const horaFim = parseInt(matchFim[1], 10);
    const minutoFim = parseInt(matchFim[2], 10);
    const horaConsulta = parseInt(matchConsulta[1], 10);
    const minutoConsulta = parseInt(matchConsulta[2], 10);

    const dataInicio = new Date();
    dataInicio.setHours(horaInicio, minutoInicio, 0);

    const dataFim = new Date();
    dataFim.setHours(horaFim, minutoFim, 0);

    const dataConsulta = new Date();
    dataConsulta.setHours(horaConsulta, minutoConsulta, 0);

    return dataConsulta >= dataInicio && dataConsulta <= dataFim;
  }

  return false;
};

const verificaHorario = async (vet_id: string, date_time: string) => {
  const dataHoraDiaSemana = obterDataHoraDiaSemana(date_time);

  const horarioConsulta = await verificaHorarioConsulta(vet_id, date_time);

  if (!horarioConsulta) {
    return false;
  }

  const jornadaDeTrabalho = await getJornadaVeterinario(
    vet_id,
    dataHoraDiaSemana?.diaDaSemana || ""
  );

  const verificaHorarioVet = verificarHorarioDeTrabalho(
    jornadaDeTrabalho?.horaInicio || "",
    jornadaDeTrabalho?.horaFim || "",
    dataHoraDiaSemana?.horario || ""
  );

  if (!verificaHorarioVet) {
    false;
  }

  return true;
};

export default verificaHorario;
