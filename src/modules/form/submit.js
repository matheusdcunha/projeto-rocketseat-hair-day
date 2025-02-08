import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

//Date atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual e define a data mínima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  //Previne o comportamente padrão do formulário de recarregar a página.
  event.preventDefault();


  console.log("Enviado!");

}