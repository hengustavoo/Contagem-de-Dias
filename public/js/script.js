const dataInicial = new Date("2024-03-01T00:00:00");

function atualizarTempo() {
  const agora = new Date();
  const diffMs = agora - dataInicial;

  const anos = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));
  const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24)) % 365;
  const horas = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diffMs % (1000 * 60)) / 1000);

  document.getElementById(
    "resultado"
  ).textContent = `${anos} ano(s), ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarTempo, 1000);
atualizarTempo();