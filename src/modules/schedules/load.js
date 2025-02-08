import { scheduleFetchByDay } from "../../services/scheduleFetchByDay.js";
import { hoursLoad } from "../form/hoursLoad";
import { schedulesShow } from "../schedules/show.js";

// Seleciona o input de data.
const selectedDate = document.getElementById("date")

export async function schedulesDays() {
  // Obtém a data do input
  const date = selectedDate.value

  // Buscar na API os agendamentos

  const dailySchedules = await scheduleFetchByDay({ date })

  //Exibe os agendamentos
  schedulesShow({ dailySchedules })


  // Renderiza as horários disponíveis.
  hoursLoad({ date, dailySchedules })
}