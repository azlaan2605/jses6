function vanilla(){    //using var
    var x=5
    if(true){
        var x=8
        console.log(x);
    }
    console.log(x);
}
vanilla()


function es6() {         //using let
    let y=6
    if(true){
        let y=7
        console.log(y);
    }
    console.log(y);
}
es6()


//Arrow function
const add =(a,b)=> {
    return a+b
}


//Arrow function in one line
const add1=(a,b) => a+b;

//Template literals
var name='Hey';
var greetings='How do u do?';
var message=`${name} ${greetings}` 
console.log(message);

//Array helper methods
// 1.Map
// 2.Find
// 3.Filter
// 4.forEach 
// 
// 5.Reduce


//MAP
const arr=[2,3,4,5]
arr.map(function(e){   //In vanilla Js
    console.log(e);
})


const mul=arr.map((item) =>{ 
    return item*2                            //In Es6
})
console.log(mul);

// function add(a,b,c){
//     return a+b+c;                 //this will not work because only 2 arguments are passed
// }
// add(2,3)


//Correction

function add2(x,y,z){
    if(y=== undefined){
        y=o;
    }
    if(z=== undefined){
        z=0;
    }
    return x+y+z
}
var addition=add2(2,3);
console.log(addition);