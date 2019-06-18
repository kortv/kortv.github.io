function getRating(rezult) {
  if (rezult < 5) return "Неудовлетворительно"
  else if (rezult >= 5 && rezult < 7) return "Удовлетворительно"
  else if (rezult >= 7 && rezult < 9) return "Хорошо"
  else return "Отлично"
}

function download(text, name) {
  const file = new Blob([text], {type: 'text/plain'});
  const url = URL.createObjectURL(file);
  const a = document.createElement('a')
  a.href = url
  a.download = name
  a.click()
}

function calc(matrica) {
  var rezult = 0,
    rez = 5;

  for (var n = 1; n <= 10; n++) {
    for (var k = 0; k < 4; k++) {
      rez = 5;
      if (document.forms.test["id" + n][k].checked == true) {
        rez = k;
        if (matrica[n - 1] == rez) {
          rezult++;
        }
      }
    }
  }
  
  alert(`Ваша оценка ${getRating(rezult)}, ${rezult * 10}% верно. Курс закончен!`);

  // var numPage = parseInt(document.title) + 1;
  // if (numPage > 2) {
    // alert("Курс закончен!");
    // const prev = sessionStorage.getItem('resault')
    // console.info(prev)
    download(
      `${window.name} закончил курс с оценкой ${getRating(rezult)}. В среднем ответив верно на ${rezult * 10}% вопросов.`,
      'resault.txt'
    )
    // sessionStorage.setItem('resault', 0)
  // } else {
  //   console.info(this);
  //   sessionStorage.setItem('resault', rezult)
  //   window.location.href = "index" + numPage + ".html";
  // }
}