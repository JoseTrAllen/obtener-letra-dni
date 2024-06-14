
const letterArray = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
const input = document.getElementById("input");
const resultInput = document.getElementById("input-result");
const button = document.getElementById("button");

const rest = (num) => {
  return num % 23;
}

const letter = (num) => {
  return letterArray[num];
}

const printDNI = (letter) => {
  resultInput.innerText = `${input.value}-${letter}`;
  input.value = "";
}

button.addEventListener("click", () => {
  const resto = rest(input.value);
  const DNILetter = letter(resto);
  if (input.value === "" || input.value.length < 8 || input.value.length > 8) {
    alert(`Has introducido ${input.value.length} números. Por favor, introduce 8 números.`);
    input.value = "";
  } else {
    printDNI(DNILetter); 
  }
})

/*Resto Letra
    0     T
    1     R
    2     W
    3     A
    4     G
    5     M
    6     Y
    7     F
    8     P
    9     D
    10    X
    11    B
    12    N
    13    J
    14    Z
    15    S
    16    Q
    17    V
    18    H
    19    L
    20    C
    21    K
    22    E
*/