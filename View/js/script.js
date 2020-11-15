function init(){ //funãao que é executada quando o script é carregado
  var datafestival = moment('2020-12-15 00:00:00');
  var atual = moment();
  var duracao = moment.duration(datafestival - atual);
  setInterval(function() {
    duracao = moment.duration(duracao - 1000);
    document.getElementById('contador').innerHTML = '<p id="p">'+arruma(duracao.years())+':'+arruma(duracao.months())+':'+arruma(duracao.days())+':'+arruma(duracao.hours())+':'+arruma(duracao.minutes())+':'+arruma(duracao.seconds())+'</p>';
  }, 1000);
}
function arruma(a) {
  return (a < 10) ? '0' + a.toString() : a.toString();
}
init();
