

n = 0;

while(n<100){
 console.log(n);
 n += 5;
}


let over = false;
counter = 2;
 while(over = true){
    let continueloop = confirm(`[${counter}] continue the loop`);
    over = continueloop === true ? false : true;
    counter = counter + 1;
 }


//  let isOver = false;
// 2 let counter = 1;
// 3 while (isOver != true) {
// 4     let continueLoop = confirm(`[${counter}] Continue the loop?`);
// 5     isOver = continueLoop === true ? false : true;
// 6     counter = counter + 1;
// 7 }