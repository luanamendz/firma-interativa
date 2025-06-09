const frases = [
  "Trabalhar é preciso, mas procrastinar é inevitável.",
  "Meu cargo? Diretor de Cacarejos e Planilhas.",
  "Se der erro, culpa o estagiário. Ou o frango.",
  "Sexta-feira é feriado emocional aqui na firma.",
  "Acordei motivado. Pena que era alarme falso.",
  "Hoje eu tô 100%... 100% querendo ir embora.",
  "PowerPoint é arte, Excel é guerra.",
  "Não faço milagres. Só frango e planilha.",
  "A meta é fingir produtividade com estilo.",
  "Pensar dói, cacarejar é mais fácil."
];

const fraseDoDia = frases[Math.floor(Math.random() * frases.length)];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("frase-frango").textContent = `"${fraseDoDia}"`;
});
