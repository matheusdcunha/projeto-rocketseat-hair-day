import { apiConfig } from "./apiConfig.js";

export async function scheduleNew({ id, name, when }) {
  try {
    //Faz a requisição para enviar os dados do agendamento.
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: `${id}`, name, when })
    }
  )

  //Exibe mensagem do agendamento foi realizado.
  alert("Agendamento realizado com sucesso!")
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar. Tente novamente mais tarde.")
  }
}