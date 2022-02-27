const numberList = {}

for (i=0; i <= 10000; i++) {

    const numbers = Math.floor(Math.random() * 20) + 1;
    
    if(!numberList[numbers]) {
        numberList[numbers] = 1;
    } else {
        numberList[numbers]++
    }
   
}

console.log(numberList)

