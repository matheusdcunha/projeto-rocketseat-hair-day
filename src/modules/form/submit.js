import dayjs from "dayjs";

import { scheduleNew } from "../../services/scheduleNew.js";
import { schedulesDays } from "../schedules/load.js"

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

//Date atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual e define a data mínima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  //Previne o comportamento padrão do formulário de recarregar a página.
  event.preventDefault();

  try {
    const name = clientName.value.trim()

    if (!name) {
      return alert("Informe o nome do cliente!")
    }


    //Recuperando o horário selecionado.
    const hourSelected = document.querySelector(".hour-selected")

    if (!hourSelected) {
      return alert("Selecione o horário!")
    }

    //Recuperar somente a hora
    const [hour] = hourSelected.innerText.split(":")

    //Inserir a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")

    //Gerar um ID
    const id = new Date().getTime();

    //Faz o agendamento
    await scheduleNew({
      id, name, when
    })

    //Recarregar os agendamentos.
    await schedulesDays();

    //Limpa o input de nome do cliente.
    clientName.value = ""

  } catch (err) {
    alert("Não foi possível realizar o agendamento.")
    console.log(err)
  }
}