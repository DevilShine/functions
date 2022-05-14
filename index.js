// var q, t = "";

// for (; ;) {
//   q = prompt("Первое число");
//   if (q != +q) { alert("первый ввод – не число"); break; }
//   t = prompt("Второе число");
//   if (t != +t) { alert("второй ввод – не число"); break; }
//   if (q > t) {
//     alert("Первое число больше");
//   } else if (q < t) {
//     alert("Первое число меньше");
//   } else {
//     alert("Числа равны!");
//   }
// }

// --------------------------------task 2

/*
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var entranses = getRandomInRange(1, 10);

// var entranses = prompt("Введите количество подэздов от 1 до 10");
// for (; ;) {
//   if (entranses != +entranses) {
//     entranses = prompt("Неверно! Введите количество подъездов от 1 до 10");
//   } else if (entranses < 1) {
//     entranses = prompt("Неверно! Введите количество подъездов от 1 до 10");
//   } else if (entranses > 10) {
//     entranses = prompt("Неверно! Введите количество подъездов от 1 до 10");
//   } else if (entranses == "") {
//     entranses = prompt("Неверно! Введите количество подъездов от 1 до 10");
//   } else {
//     break;
//   }
// }

var arr1 = [];
var arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr10 = [];

var u = "";

for (let i = 1; i <= entranses; i++) {

  var numOfStor = getRandomInRange(1, 25);

  var landing = getRandomInRange(1, 20);

  if (i == 1) {
    for (var j = 0; j <= numOfStor * landing; j++) {
      if (j == numOfStor * landing) {
        arr1 += j;
        arr1 += "";
      } else {
        arr1 += j;
        arr1 += ", ";
      }
      u = j;
      if (j == numOfStor * landing) console.log("Послейдняя квартира в первом подъезд:" + j);
    }
  } else if (i == 2) {
    for (j = 1; j <= numOfStor * landing; j++) {
      u++;
      if (j == 1) {
        arr2 = u;
      } else {
        arr2 += u;
      }
      arr2 += ", ";
      if (j == numOfStor * landing) console.log("Послейдняя квартира во втором подъезд:" + u);
    }
  } else if (i == 3) {
    for (j = 1; j <= numOfStor * landing; j++) {
      u++;
      if (j == 1) {
        arr3 = u;
      } else {
        arr3 += u;
      }
      arr3 += ", ";
      if (j == numOfStor * landing) console.log("Послейдняя квартира в третем подъезд:" + u);
    }
  } else if (i == 4) {
    for (j = 1; j <= numOfStor * landing; j++) {
      u++;
      if (j == 1) {
        arr4 = u;
      } else {
        arr4 += u;
      }
      arr4 += ", ";
      if (j == numOfStor * landing) console.log("Послейдняя квартира в четвертом подъезд:" + u);
    }
  } else if (i == 5) {
    for (j = 1; j <= numOfStor * landing; j++) {
      u++;
      if (j == 1) {
        arr5 = u;
      } else {
        arr5 += u;
      }
      arr5 += ", ";
      if (j == numOfStor * landing) console.log("Послейдняя квартира в пятом подъезд:" + u);
    }
  } else if (i == 6) {
    for (j = 1; j <= numOfStor * landing; j++) {
      u++;
      if (j == 1) {
        arr6 = u;
      } else {
        arr6 += u;
      }
      arr6 += ", ";
      if (j == numOfStor * landing) console.log("Послейдняя квартира в шестом подъезд:" + u);
    }
  } else if (i == 7) {
    for (j = 1; j <= numOfStor * landing; j++) {
      u++;
      if (j == 1) {
        arr7 = u;
      } else {
        arr7 += u;
      }
      arr7 += ", ";
      if (j == numOfStor * landing) console.log("Послейдняя квартира в седьмом подъезд:" + u);
    }
  } else if (i == 8) {
    for (j = 1; j <= numOfStor * landing; j++) {
      u++;
      if (j == 1) {
        arr8 = u;
      } else {
        arr8 += u;
      }
      arr8 += ", ";
      if (j == numOfStor * landing) console.log("Послейдняя квартира в восьмом подъезд:" + u);
    }
  } else if (i == 9) {
    for (j = 1; j <= numOfStor * landing; j++) {
      u++;
      if (j == 1) {
        arr9 = u;
      } else {
        arr9 += u;
      }
      arr9 += ", ";
      if (j == numOfStor * landing) console.log("Послейдняя квартира в девятом подъезд:" + u);
    }
  } else if (i == 10) {
    for (j = 1; j <= numOfStor * landing; j++) {
      u++;
      if (j == 1) {
        arr10 = u;
      } else {
        arr10 += u;
      }
      arr10 += ", ";
      if (j == numOfStor * landing) console.log("Послейдняя квартира в десятом подъезд:" + u);
    }
  }
}

if (entranses == 1) {
  alert("Всего " + entranses + " подъезд");
} else if (entranses < 5) {
  alert("Всего " + entranses + " подъезда");
} else {
  alert("Всего " + entranses + " подъездов");
}
console.log(arr1 + "\n \n" + arr2 + "\n \n" + arr3 + "\n \n" + arr4 + "\n \n" + arr5 + "\n \n" + arr6 + "\n \n" + arr7 + "\n \n" + arr8 + "\n \n" + arr9 + "\n \n" + arr10);

var apartments = prompt("введите номер вашей квартиры");


if (entranses == 1) {
  if (arr1.includes(apartments) == true) {
    alert("Первый подезд");
  } else {
    alert("Такой квартиры нет!");
  }
} else if (entranses == 2) {
  if (arr1.includes(apartments) == true) {
    alert("Первый подезд");
  } else if (arr2.includes(apartments) == true) {
    alert("Второй подезд");
  } else {
    alert("Такой квартиры нет!");
  }
} else if (entranses == 3) {
  if (arr1.includes(apartments) == true) {
    alert("Первый подезд");
  } else if (arr2.includes(apartments) == true) {
    alert("Второй подезд");
  } else if (arr3.includes(apartments) == true) {
    alert("Третий подезд");
  } else {
    alert("Такой квартиры нет!");
  }
} else if (entranses == 4) {
  if (arr1.includes(apartments) == true) {
    alert("Первый подезд");
  } else if (arr2.includes(apartments) == true) {
    alert("Второй подезд");
  } else if (arr3.includes(apartments) == true) {
    alert("Третий подезд");
  } else if (arr4.includes(apartments) == true) {
    alert("Четвертый подезд");
  } else {
    alert("Такой квартиры нет!");
  }
} else if (entranses == 5) {
  if (arr1.includes(apartments) == true) {
    alert("Первый подезд");
  } else if (arr2.includes(apartments) == true) {
    alert("Второй подезд");
  } else if (arr3.includes(apartments) == true) {
    alert("Третий подезд");
  } else if (arr4.includes(apartments) == true) {
    alert("Четвертый подезд");
  } else if (arr5.includes(apartments) == true) {
    alert("Пятый подезд");
  } else {
    alert("Такой квартиры нет!");
  }
} else if (entranses == 6) {
  if (arr1.includes(apartments) == true) {
    alert("Первый подезд");
  } else if (arr2.includes(apartments) == true) {
    alert("Второй подезд");
  } else if (arr3.includes(apartments) == true) {
    alert("Третий подезд");
  } else if (arr4.includes(apartments) == true) {
    alert("Четвертый подезд");
  } else if (arr5.includes(apartments) == true) {
    alert("Пятый подезд");
  } else if (arr6.includes(apartments) == true) {
    alert("Шестой подезд");
  } else {
    alert("Такой квартиры нет!");
  }
} else if (entranses == 7) {
  if (arr1.includes(apartments) == true) {
    alert("Первый подезд");
  } else if (arr2.includes(apartments) == true) {
    alert("Второй подезд");
  } else if (arr3.includes(apartments) == true) {
    alert("Третий подезд");
  } else if (arr4.includes(apartments) == true) {
    alert("Четвертый подезд");
  } else if (arr5.includes(apartments) == true) {
    alert("Пятый подезд");
  } else if (arr6.includes(apartments) == true) {
    alert("Шестой подезд");
  } else if (arr7.includes(apartments) == true) {
    alert("Седьмой подезд");
  } else {
    alert("Такой квартиры нет!");
  }
} else if (entranses == 8) {
  if (arr1.includes(apartments) == true) {
    alert("Первый подезд");
  } else if (arr2.includes(apartments) == true) {
    alert("Второй подезд");
  } else if (arr3.includes(apartments) == true) {
    alert("Третий подезд");
  } else if (arr4.includes(apartments) == true) {
    alert("Четвертый подезд");
  } else if (arr5.includes(apartments) == true) {
    alert("Пятый подезд");
  } else if (arr6.includes(apartments) == true) {
    alert("Шестой подезд");
  } else if (arr7.includes(apartments) == true) {
    alert("Седьмой подезд");
  } else if (arr8.includes(apartments) == true) {
    alert("Восьмой подезд");
  } else {
    alert("Такой квартиры нет!");
  }
} else if (entranses == 9) {
  if (arr1.includes(apartments) == true) {
    alert("Первый подезд");
  } else if (arr2.includes(apartments) == true) {
    alert("Второй подезд");
  } else if (arr3.includes(apartments) == true) {
    alert("Третий подезд");
  } else if (arr4.includes(apartments) == true) {
    alert("Четвертый подезд");
  } else if (arr5.includes(apartments) == true) {
    alert("Пятый подезд");
  } else if (arr6.includes(apartments) == true) {
    alert("Шестой подезд");
  } else if (arr7.includes(apartments) == true) {
    alert("Седьмой подезд");
  } else if (arr8.includes(apartments) == true) {
    alert("Восьмой подезд");
  } else if (arr9.includes(apartments) == true) {
    alert("Девятый подезд");
  } else {
    alert("Такой квартиры нет!");
  }
} else if (entranses == 10) {
  if (arr1.includes(apartments) == true) {
    alert("Первый подезд");
  } else if (arr2.includes(apartments) == true) {
    alert("Второй подезд");
  } else if (arr3.includes(apartments) == true) {
    alert("Третий подезд");
  } else if (arr4.includes(apartments) == true) {
    alert("Четвертый подезд");
  } else if (arr5.includes(apartments) == true) {
    alert("Пятый подезд");
  } else if (arr6.includes(apartments) == true) {
    alert("Шестой подезд");
  } else if (arr7.includes(apartments) == true) {
    alert("Седьмой подезд");
  } else if (arr8.includes(apartments) == true) {
    alert("Восьмой подезд");
  } else if (arr9.includes(apartments) == true) {
    alert("Девятый подезд");
  } else if (arr10.includes(apartments) == true) {
    alert("Десятый подезд");
  } else {
    alert("Такой квартиры нет!");
  }
}
*/

// --------------------------------task 3

/*
var t;

function evenOdd(even, odd) {
  if (even % 2 == 1 && odd % 2 == 1) {
    t = +even + +odd;
  } else if (even % 2 == 0 && odd % 2 == 0) {
    t = even * odd;
  } else if (even % 2 == 1 && odd % 2 == 0) {
    t = even;
  } else {
    t = odd;
  }
}

var e = prompt("введите первое число");

for (; ;) {
  if (e != +e || e == "") {
    e = prompt("введите первое число");
  } else {
    break;
  }
}

var o = prompt("введите второе число");

for (; ;) {
  if (o != +o || o == "") {
    o = prompt("введите второе число");
  } else {
    break;
  }
}

evenOdd(e, o);

console.log(t);
*/

// --------------------------------task 4

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var xfi, yfi, xse, yse, xth, yth, xfo, yfo;

document.getElementById("button").onclick = function () {
  xfi = document.getElementById("xfi").value;
  document.getElementById("a").style.position = "relative";
  document.getElementById("a").style.left = xfi + "px";

  yfi = document.getElementById("yfi").value;
  document.getElementById("a").style.top = yfi + "px";

  xse = document.getElementById("xse").value;
  document.getElementById("b").style.position = "relative";
  document.getElementById("b").style.left = xse + "px";

  yse = document.getElementById("yse").value;
  document.getElementById("b").style.top = yse + "px";

  xth = document.getElementById("xth").value;
  document.getElementById("c").style.position = "relative";
  document.getElementById("c").style.left = xth + "px";

  yth = document.getElementById("yth").value;
  document.getElementById("c").style.top = yth + "px";

  xfo = document.getElementById("xfo").value;
  document.getElementById("d").style.position = "relative";
  document.getElementById("d").style.left = xfo + "px";

  yfo = document.getElementById("yfo").value;
  document.getElementById("d").style.top = yfo + "px";
}

var check = document.documentElement.clientWidth;

if (check > 400) {
  document.getElementById("button-two").onclick = function () {

    xfi = getRandomInRange(-400, 400);
    document.getElementById("a").style.position = "relative";
    document.getElementById("a").style.left = xfi + "px";
    document.getElementById("xfi").value = xfi;

    yfi = getRandomInRange(-400, 400);
    document.getElementById("a").style.top = yfi + "px";
    document.getElementById("yfi").value = yfi;

    xse = getRandomInRange(-400, 400);
    document.getElementById("b").style.position = "relative";
    document.getElementById("b").style.left = xse + "px";
    document.getElementById("xse").value = xse;

    yse = getRandomInRange(-400, 400);
    document.getElementById("b").style.top = yse + "px";
    document.getElementById("yse").value = yse;

    xth = getRandomInRange(-400, 400);
    document.getElementById("c").style.position = "relative";
    document.getElementById("c").style.left = xth + "px";
    document.getElementById("xth").value = xth;

    yth = getRandomInRange(-400, 400);
    document.getElementById("c").style.top = yth + "px";
    document.getElementById("yth").value = yth;

    xfo = getRandomInRange(-400, 400);
    document.getElementById("d").style.position = "relative";
    document.getElementById("d").style.left = xfo + "px";
    document.getElementById("xfo").value = xfo;

    yfo = getRandomInRange(-400, 400);
    document.getElementById("d").style.top = yfo + "px";
    document.getElementById("yfo").value = yfo;
  }
} else {
  document.getElementById("button-two").onclick = function () {

    xfi = getRandomInRange(-100, 100);
    document.getElementById("a").style.position = "relative";
    document.getElementById("a").style.left = xfi + "px";
    document.getElementById("xfi").value = xfi;

    yfi = getRandomInRange(-100, 100);
    document.getElementById("a").style.top = yfi + "px";
    document.getElementById("yfi").value = yfi;

    xse = getRandomInRange(-100, 100);
    document.getElementById("b").style.position = "relative";
    document.getElementById("b").style.left = xse + "px";
    document.getElementById("xse").value = xse;

    yse = getRandomInRange(-100, 100);
    document.getElementById("b").style.top = yse + "px";
    document.getElementById("yse").value = yse;

    xth = getRandomInRange(-100, 100);
    document.getElementById("c").style.position = "relative";
    document.getElementById("c").style.left = xth + "px";
    document.getElementById("xth").value = xth;

    yth = getRandomInRange(-100, 100);
    document.getElementById("c").style.top = yth + "px";
    document.getElementById("yth").value = yth;

    xfo = getRandomInRange(-100, 100);
    document.getElementById("d").style.position = "relative";
    document.getElementById("d").style.left = xfo + "px";
    document.getElementById("xfo").value = xfo;

    yfo = getRandomInRange(-100, 100);
    document.getElementById("d").style.top = yfo + "px";
    document.getElementById("yfo").value = yfo;
  }
}
