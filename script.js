// 1

const printNumbers = () => {
    for (i = 1; i <= 10; i++){
        console.log(i);
    }
}

printNumbers();

// 2
const isOdd = (number) => number % 2 !== 0; //berilgan sonning toqligini tekshiradigan yordamchi funksiya

const printOddNumbers = (start, end) => { //toq sonlarni chiqarish uchun funksiya
    for (let i = start; i < end; i++) {
        if (isOdd(i)) {
            console.log(i);
        }
    }
};

const printOddNumbersUpTo100 = () => { //'printOddNumbers'ni chaqiradigan asosiy funktsiya
    printOddNumbers(1, 100);
};

printOddNumbersUpTo100();



// 3
const multiplicationTable = (number) => {
    for(let i =1; i <=10; i++){
        console.log(`${number} x ${i} = ${number * i}`);
    }
};

multiplicationTable(7);

// 4

const calculateSum = () => {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += i;
    }
    return sum;
  };
  
  const result = calculateSum();
  console.log(`1 dan 10 gacha sonlar yigindisi: ${result}`);


  //   5
  
  function calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      let resulT = 1;
      for (let i = 2; i <= number; i++) {
        resulT *= i;
      }
      return resulT;
    }
  }
  
  const resulT = calculateFactorial(10);
  console.log(`factorial: ${resulT}`);
  



  
  