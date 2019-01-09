//0,03 campo de futebol por segundo de desmatamento

let timer = () => {
  const dateStart = new Date("2019-01-01");
  const curDate = new Date();
  const timeGap = Math.abs(curDate - dateStart)/1000;
  const currentDef = Math.round(timeGap + 0.03);
  document.getElementById("timer").innerHTML = currentDef;
}

setInterval(timer, 1000);
