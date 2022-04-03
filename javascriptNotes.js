

//Notes for javascript

// arrow function takes the this keyword lexically
//normal function takes the this keyword with which it is bind to

// let person = {
//     name:"rohit",
//     displayName:function(){
//         console.log(this.name) // rohit

//         // setTimeout(function(){
//         //     console.log(this.name) // prints the window object with normal function keyword
//         // },1000)

//          setTimeout(()=>{
//             console.log(this.name) // prints the name 'rohit'as the arrow function takes the lexial env
//         },1000)

//     }
// }

// let person1 = {
//     name:'Rohit',
//     displayName:function(){
//         console.log('hello')
//         console.log(this.name) // this will print the window object
//     }
// }

// person1.displayName();

// when not to use arrow function
// cannot use arrow funtion with the new keyword

// function person () {
// }

// console.log(new person()) // o/p person object with constructor

// let person = ()=> {
// }

// console.log(new person()) // error person is not a constrcutor

//************************************************************************************************************

 // destructuring array and obj using esg javascript

//  const users = [
//      ['Dipesh' , 'Malvia'],
//      ['Rohit','Singh'],
//      ['Sahil','Kakkar']
//  ]

//  const newArray = users.map(([firstname,lastname],index)=>{
//      return {firstname , lastname} // object literal of es6 , if the object and the value name are same , we can keep only one value
//  });

//  console.log(newArray);

 // destructuring arrays

//  const obj = {
//      name:'rohit',
//      location:['singapore','india', 'italy']
//  }

//  const {location:[,, loc]} = obj; // referencing the location as lco;
//  console.log(loc);

//************************************************************************************************************
// call back , call back hell and to call back is overcome by the async await and promises

// call back function
// call back function are synchronous in nature and not async
// function asyncFn(cb){
//     cb();
// }

// asyncFn(()=>{
//     console.log('Iam a call back function')
// })

//promises
// const promise = new Promise((resolve , reject)=>{

// if(false){
//     const person = {name:'Dipesh'}
//     resolve(person)
// }
// else{
//     const err = {errCode:'1001'}
//     reject(err)
// }
// })

// // resolve the returned promise
// promise
// .then(  
// (val)=>console.log(val),
// )
// .catch((err)=>console.log(err))
// .finally(()=>console.log('clean up'))


// call functions are synchronous in nature 
// while the promises are asynchronous in nature

// function asyncFn(){
//     return Promise.resolve();
// }

// asyncFn().then(()=> console.log(firstName));
// const firstName = 'Rohit';

// chaining of promises

// const promise = new Promise((resolve , reject)=>{
// resolve('Iam done resolving')
// })

// promise.then((val)=>{
// console.log(val);
// return "done1"
// })
// .then((val1)=>{
// console.log(val1)
// return "done2"
// }).then((val2)=>{
//     console.log(val2)
// })

// console.log(null==undefined);
// console.log(null===undefined);

// console.log(Boolean('false')===Boolean(false))


//************************************************************************************************************

/** Selecting elmennts from the dom  */ 

// document.getElementById('section-1');
// document.getElementsByClassName('class');
// document.querySelector('.head'); // this is used for class name
//documnet.


/** to be done write the difference between nodeList and html elements */



//************************************************************************************************************
// call , apply and bind method
var person = {
    name:'rohit',
    hello:function(thing){
        console.log(this.name + " says hello "+ thing)
    }
}

var obj1 = {
    name:'Kailash'
}

//person.hello('World');

//call method
// person.hello.call(obj1, 'World')

// apply method
// just adding an array difference
//person.hello.apply(obj1, ['Wolrd'])

//bind method
//it just returns a new function
// var funcCall = person.hello.bind(obj1);
// funcCall('World')


//************************************************************************************************************

/**find index in javascript */
// const a = [{id:'tile34433'},{id:'tile'},{id:'Hero'}];
// const index = a.findIndex((obj)=>{
// return obj.id==='tile';
// })
// console.log(index);

//************************************************************************************************************
// event loop in practise
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

// console.log('Test end');

// creating a delay function and promises
//************************************************************************************************************
// const delay = function (seconds){
//     const promise = new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             resolve('resolved')
//         },seconds*1000)
//     })
//     return promise
// }

// delay(1).then((res)=>{ console.log(res)})

// Promise.all([delay(1),delay(2),delay(3)]).then((res)=>{
//    for(let a of res){
//        console.log(a);
//    }
// })

// Promise.any([Promise.reject('hello'),Promise.reject('hello'),Promise.reject('hello')]).then((res)=>{
//         console.log(res);
//  })


// async and await
// await is eqaul to then in promise

// const fetchProductDetailById = async () => {
//     const response = await delay(1);
//     console.log(response)
//    return response;
   
//   };

// fetchProductDetailById();

// the prototype chain 
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

//************************************************************************************************************

// define scope and scope chain in javascript



//1.gloabal scope
// var globalVariable = "Hello world";

// function sendMessage(){
//   return globalVariable; // can access globalVariable since it's written in global space
// }

// function sendMessage2(){
//   return sendMessage(); // Can access sendMessage function since it's written in global space
// }

// sendMessage2();  // Returns “Hello world”

//2.local or functional scope
// function awesomeFunction(){
//     var a = 2;
  
//     var multiplyBy2 = function(){
//       console.log(a*2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
//     }
//   }
//   console.log(a); // Throws reference error since a is written in local scope and cannot be accessed outside
  
//   multiplyBy2(); // Throws reference error since multiplyBy2 is written in local scope

//3.block scope
{
    var x = 45;
  }
  
  console.log(x); // Gives reference error since x cannot be accessed outside of the block
  
  for(let i=0; i<2; i++){
    // do something
  }
  
  console.log(i); // Gives reference error since i cannot be accessed outside of the for loop block


  var y = 24;

function favFunction(){
  var x = 667;
  var anotherFavFunction = function(){
    console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
  }

  var yetAnotherFavFunction = function(){
    console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
  }

  anotherFavFunction();
  yetAnotherFavFunction();
}


favFunction();
//************************************************************************************************************
// memoized function
function memoizeAddTo256(){
    var cache = {}
    return function(num){
        if(num in cache){
            console.log('cached');
            return cache[num]
        }
        else{
            cache[num] = num+256;
            return cache[num];
        }
    }
}

var memoizeAdd = memoizeAddTo256();
memoizeAdd(20) // outpputs 
