import { hoursLoad } from "../form/hoursLoad";

// Seleciona o input de data.
const selectedDate  = document.getElementById("date")

export function schedulesDays(){
  // Obtém a data do input
  const date =selectedDate.value
  
  // Renderiza as horários disponíveis.
  hoursLoad({date})
}