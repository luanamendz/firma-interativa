const frases = [
  "Segunda-feira é o chefe disfarçado de dia.",
  "Se correr o bicho pega, se ficar a planilha come.",
  "Na dúvida, finge que tá digitando.",
  "A cada meta batida, nasce um novo relatório.",
  "Planejei tanto que cansei antes de começar.",
  "Minha motivação tirou férias sem aviso.",
  "Sonhei com férias e acordei em reunião.",
  "A realidade é um bug mal resolvido.",
  "Ctrl + C no esforço, Ctrl + V no descanso.",
  "Teclado é meu travesseiro corporativo.",
  // (Aqui você coloca até 1000 frases, tá? Exemplo com só 10)
];

function obterNumeroDoDia() {
  const hoje = new Date();
  const inicio = new Date("2025-06-09"); // Começa no dia 09/06/2025 como dia 0
  const diffDias = Math.floor((hoje - inicio) / (1000 * 60 * 60 * 24));
  return diffDias % frases.length; // Volta ao início após acabar as frases
}

function formatarData(data) {
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const dataHoje = new Date();
  document.getElementById("data-atual").textContent = formatarData(dataHoje);

  const numeroFrase = obterNumeroDoDia();
  document.getElementById("frase-frango").textContent = `"${frases[numeroFrase]}"`;
});
