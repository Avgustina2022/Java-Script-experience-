console.log(itedPersonal);
document.getElementById("container").innerHTML +=
  1 + index + ".Имя:" + e[0] + ",телефон:" + e[1] + ",e-mail:" + e[2] + "<br>";

itedPersonal.forEach((e, index) => {
  document.getElementById("container").innerHTML += `${1 + index}. Имя: ${
    e[0]
  }, телефон:${e[1]}, e-mail:'${e[2]}<br>`;
});
