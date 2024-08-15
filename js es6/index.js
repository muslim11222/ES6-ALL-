        
        
                    //    Modern JavaScript ES6   



// 1. JavaScript Fat Arrow Functions ...

     // Ai fat arrow ta code korte gele kmn kore likhte hy seta dekhano holo :

     // Normal function theke kmn kore arrow function te convert kora jai seta dekhano holo : 

     //  Way 1 : 


          // var number = () => {
          //      return 10;
          // }

          // console.log(number());
                                     


     // Way 2 : ak line o sesh kora jai 


          // var number = () =>10;
          // console.log(number());

// Note : ai arrow function ta asar mull karon holo ai (this) keyword ta k bujhar jonno ba esay kora jonno 






// 2. Truthy value / Falsy values.....
                         

     // var myvar = true;


     // if(myvar) {                    //<---------- myvar gulo k bola hy truthy or falsy value
     //      console.log("i am truthy");
     // } else {
     //      console.log("i am  falsey");
     // }

// Note : false dekhabe kon gulo myvar ar vitor thakle .... false, null , 0 , NaN, '' , agulo thakle i am falsey show korbe r ja diben sob kisu truthy show krobe 






// 3. Ternary Operator...    Ata mane holo : amra joto sortcute code likhte pari 



// Example :


     //     var age = 18;

     //     var final = (age >= 18) ? 'boro' ; 'soto';

     //     console.log(final);








// 4. Array find() method.....

// var numbers = [1,2,3,4,5,6,7,8,9,10];

// var result = numbers.find(function(currentValule) {
//      return currentValule > 5;
// })

// console.log(result);

//output : 6


// NOTE : ai find arrayr kaj holo amr kono kisu jodi khuji tahole ai find array ta use korbo and currentValule debar por tar porer value ta show korbe 







// 5. Array findIndex() method.... atao same 



// var numbers = [1,2,3,4,5,6,7,8,9,10];

// var result = numbers.find(function(currentValule) {
//      return currentValule > 5;
// })
// console.log(result);

//output : 6


// NOTE : tahole find ar kaj holo : main element ta k ber kore dei ..... R findIdex ar kaj holo : index ta k ber kore dei









// 6. Array filter() method...  atao ak e rokom but aktu defrence jemon 4 dile tar por theke all show korbe 


// var number = [1,2,3,4,5,6,7,8,9];

// var result = number.filter((currentValule)=> {
// return currentValule > 4;
// })

// console.log(result);





// 7. Array slice() method  


// var number = [1,2,3,4,5,6,7,8,9];

// var result = number.slice(1, 4);
// console.log(result);

//Output : [ 2, 3, 4, 5 ]


// NOTE : ai slice ar kaj holo 1 theke koto porjonto run korbo tar last ar index tao bole dite hbe tahole tar vitor theke ja pabe tai run korbe 








// 8. Array splice() method : splice ar mane holo : lagano ba songjukto kora ... ai splice 3 ta perameter niter jemon : 

                          
                           
     //      var numbers = [1, 2, 3, 4, 5, 6, 7, 8,];

     //      var result = numbers.splice(1, 3, 60, 70, 80);
     //      console.log(numbers);

     // //OUTPUT
     //           [ 5, 6, 7, 8, 9 ]
     //           [ 
     //                1, 60, 70, 80,
     //                5,  6,  7,  8
     //           ]



// NOTE : 1    <------ ata holo : 1 e kop dice 

//        3    <------ ata holo : 3 ta element remove kore dibe 

//        60   <------ pore ja ase sob add korbe

// NOTE : ai splice ta kintu aktu vinno onno der theke ...numbers k log korle sob dekha jbe .....








// 9 .  Array concat() method..... atar mane holo jora lagano 


// var number1 = [1,2,3,4,5,6,7,8];
// var number2 = [2,3,4,5,6,7,8,9];

// var result = number1.concat(number2);
// console.log(result);

// OUTPUT : 1 2 number show korbe 









// 10. Array push() method

// var number1 = [1,2,3,4,5,6,7,8];

// var result = number1.push(9);
// console.log(result);

// OUTPUT : 1 2 3 4 5 6 7 8 9 








// 11. Array map() method ....... ATA khub impotent react e aitar kaj holo potita element k 2 diye vag korbe example:


// var number1 = [1,2,3,4,5,6,7,8];

// var result = number1.map((num)=> {
//      return 2 * num;
// });

// console.log(result);


// OUTPUT : [
//           2,  4,  6,  8,
//           10, 12, 14, 16 
//          ]







// 12.  Array reduce() method : ATA onek beshi lagbe ....ata 2 ta perameter nei ... prevValue , currentValue 

// var number1 = [1,2,3,4,5,6,7,8];

// var sum = number1.reduce((prevValue, currentValue) => {
//     return prevValue + currentValue;
// }, 0);

// console.log(sum);

// OUTPUT : 36

// NOTE : ai reduce ar kaj holo : 1 ar sate 2 jog hbe ...ai vabe ja ase sob jog hote thakbe .that's it 





// 13.  for loop, for in & for of 


// let  : ata holo akta blog scope ata baire theke log korle output dibe na but 
// var : ata abr baire theke log korle output dibe 

// for (var i = 0; i <= 5; i++) {
//      console.log(i);
// }

// // for in

// const address = {
//      name: "muslim",
//      age: 24,
//      year: 2024
// }

// for( value in address ) {
//      console.log(value);    
// }
  


// for of

// // const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // for (Element of myArr) {
// //      console.log(Element);
     
// }







// 14. Object tricks.... 


// const address = {
//      name: "muslim",
//      age: 24,
//      year: 2024
// }

// var keys = Object.keys(address);
// var value = Object.values(address);
// var entries = Object.entries(address);

// console.log(entries);











// 15. Function default parameter..      atar kaj holo jodi kono parameter na dei tahole atar default parameters thakbe 

// function myFunction( a = 10) {
//      return a;
// }

// console.log(myFunction());








// 16. Spread Operator     ... ai 3 ta dot k bole spread operator


// var numbers = [1, 2, 3];

// var allNumbers = [...numbers, 4, 5, 6];

// console.log(allNumbers);

// OUTPUT : 1 2 3 4 5 6

// NOTE : AI gulo kintu array or object ar khetreo bose ...









// 17 . Rest Operator


// function myFunction(...params) {
//      console.log(...params);
     
// }
// myFunction(1, 2, 3  );







// 18. Destructuring.... (ডিস স্ট্রাকচারিং)... Aita akta beatifull future . ata amader life ta k khub easy korece 

// OBJECT :

// var address1 = {
//      name: 'Muslim',
//      age: 25,
//      address: 'dhunat,bogura'
// }

// const { address: title } = address1;
// console.log(title);



// Array 

// var number = [1, 2, 3, 4, 5, 6, 7, 8];

// const [, , , a , , , b] = number;

// console.log(a, b);









// 19 .  Module Imports / Exports..... atar kaj holo : akta file theke arekta file k import korte hy kmne seta dekhano holo 


 
//      1. akta file nite hbe 
//      2. ai file theke uporer file ja ase seta import korte hbe 
//      3. react js niye kaj korar jonno uporer 2 ta file e jotesto amr akhon sekhar jonno arekta file nite hbe seta holo 
//      4. je kono name akta json file nite hebe tar vitor ai code ta dite hbe : {
//                                                                                  "type": "module"
//                                                                            }

     // main file : 


     //           import * as test from "./hello.js"
     //           console.log(a, b);

     // Porer file : 

     //           export const a = 4.3;
     //           export const b = 3.9;

     // json file : 

     //           {
     //                "type": "module"
     //           }










// 20.   20. Template Literals...   `` (backtic) ata k bole template literals

// var name = "Muslim";
// var nickName = "khan";

// console.log(`I am ${name} And my nickname is ${nickName}`);







// 21. Set & WeakSet ... 

// 1. set : ata holo referance data type like array with object ... ata unic data store korar jonno use kora hy ...ata                                      te sob use kora hy ..delete add sob kisu add kora jai 

// 2. weakSet : set ar motoi 




// let mySet = new set();

// mySet.add(8);

// console.log(mySet);






//22. copyWithin() Array method  ... aita arrayr akta method ..ata mot 3 ta perameter nite pare ( start , end , terget )  ai gulo                       holo arrayr index 


// let myArray = ['html', 'js', 'php', 'mysql', 'wp',];

// myArray.copyWithin(3, 1, 2);
// console.log(myArray);

// OUTPUT : ['html', 'js', 'php', 'js', 'wp']







// 23. ES2020 / ES11 এর অসাধারণ কিছু features 


// Window object Browser runn korbe  but node js e ata run korbe na ..mane nise je amr output dekhte pai seta te                                dekha jbe node js e window object e nai .... ai khtre ata holo global  


// global.setTimeout(() => {
//     console.log('hello');         <----- ata node js e run korbe tar karon holo ata global deuya ase 

// }, 100);


// NOTE : ES6 e new akta features add kora hyce seta ki na sob jaigai run kore 


// Example :

//     globalThis.setTimeout(() => {
//         console.log('hello');

//     }, 100);


