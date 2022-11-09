let x = 0;
let Arrayaux = [];

function createDynamicArray() {
  const x = [];

  for (let i = 0; i < 3; i++) {
    x.push(Math.ceil(Math.random() * 3));
  }
  return x;
}

function Start() {
  const array = createDynamicArray();
  console.log(array);
  const isDoorOpen = array.every((y, i, x) => x[0] === y);

  if (areArraysTheSame(array, Arrayaux)) {
    ++x;
    console.log(`Porta ${x}: aberta`);

    if (x > 2) {
      console.log(`Parabéns você venceu!`);
      x = 0;
      Arrayaux = [];
      return;
    }
  }

  if (x < 1) {
    if (isDoorOpen) {
      console.log(`Porta ${++x}: aberta!`);
      Arrayaux = array;
    } else {
      console.log(`Tente de novo!`);
    }
  }
}

function areArraysTheSame(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}
