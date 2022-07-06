//first class functon

//Storing as a variable
// var myFunction= function abc(){

//     console.log("abc ")

// }

//  myFunction();

//passing value from fxn to fxn 

// function printResult(value){
//     console.log(value)
// }
// function add(a,b,fxn){
//     let sum=a+b;
//     fxn(sum);

// }
// add (1,2,printResult)

//making inner function or closure function in first class function

// function outer(a,b) {
//     function inner(a,b){
//         console.log("inner a: "+a ,"b: "+b);
//     }
//     return inner;


// }
// outer(1,2)(1,2);

// function student(){
//     this.name="Prashant"
// }

// //console.log(typeof student)
// var s=new student();
// console.log(s.name)

// function add(a,b){
//     return a+b;

// }
// //add.message="Hello";
// add.message =function(){
//     return "Hello";
// }

// console.log(add.message)

// HIGHER ORDER FUNCTION
//     function takes another function as argument 
//     or
//     function takes another function as an argument and return function return 

//Arrow function 
const doSquare = (data)=>           
 data*data; 

 const doSquareRoot = (data)=>           
 Math.sqrt(data);

 const doCube = (data)=>           
 data*data*data; 

 function doSquareRoot(data){
    return Math.sqrt(data);     //logic for doing square root 

}

function doCube(data){
    return data*data*data;  //logic for doing cube 


}
function doSquare (data){           
    return data*data;    


function calculate(arr,fxn){
    let result =[];
    for (let i =0;i<arr.length;i++){
        result.push(fxn(arr[i]));

    }
    return result;
}



console.log(calculate([1,2,3,4],doSquareRoot))
console.log(calculate([1,2,3,4],doCube))
console.log(calculate([1,2,3,4],doSquare))
}
