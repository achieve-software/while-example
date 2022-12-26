//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

let grade = Number(prompt("your grade:"));
while (grade < 0 || grade > 100) {
  console.log("grade should be 0-100");
  grade = Number(prompt("your grade:"));
}
console.log("your grade: ", grade);
