var q, t = "";

for (; ;) {
  q = prompt("Первое число");
  if (q != +q) { alert("первый ввод – не число"); break; }
  t = prompt("Второе число");
  if (t != +t) { alert("второй ввод – не число"); break; }
  if (q > t) {
    alert("Первое число больше");
  } else if (q < t) {
    alert("Первое число меньше");
  } else {
    alert("Числа равны!");
  }
}
