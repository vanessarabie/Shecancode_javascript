 let height = 40;
 let anotherheight = height;
 console.log(anotherheight);


// putting quotes on a varname while displaying it will be considered as plain text
// let weight = 50;
// let anotherweight = weight;
// console.log = ("weight");

// use strict keyword
 "use strict"

 let base = 42;
 console.log(base);

let steps = 34;
console.log(steps);


// changing variable
let step = 12;
step = step + 20;
console.log(step);

// changing variable names 

let greetings = "goodmorning";
counter = 50;
console.log(greetings + counter);


// use of const

const hello = 'mum';
console.log(hello);

//program block
 let counter2;
 {

    counter2 = 60;
    
 }
 counter2 = counter2 + 50;
 console.log(counter2);


 // use of let and const

 let heigh = 30;
 {

    weigh = 20;
    console.log(heigh);
    console.log(weigh);
    
 }
 console.log(heigh);
 console.log(weigh);



 let hei = 43;
 {
   let  wei = 78;
   {

  
   let info = 09;
   console.log(hei);
   console.log(wei);
   console.log(info);

 }
 console.log(hei);
    console.log(wei);
//    console.log(info); this brings an error because its not defined

}

// functions

 let  counter0;
//  console.log(counter);  //  ->  undefined
 {
          counter0  =  1;
         //  console.log(counter);  //  ->  1
 }
//  counter0  =  counter0  +  1;
 console.log(counter0);  //  ->  2


 //

 var  globalGreeting  =  "Good  ";
   
  function  testFunction()  {
           var  localGreeting  =  "Morning  ";    
           console.log("function:");
 
            console.log(globalGreeting);
           console.log(localGreeting);
  }
    
  testFunction();

    
  console.log("main  program:");
 console.log(globalGreeting);
//  console.log(localGreeting);  //  ->  Uncaught  ReferenceError:  localGreeting  is  not  defined



var  counter9  =  100;
   
 function  testFunction()  {
          var counter9  =  200;    
          console.log(counter9);
 }
    
   console.log(counter9);  //  ->  100
   testFunction();  //  ->  200
   console.log(counter9);  //  ->  100