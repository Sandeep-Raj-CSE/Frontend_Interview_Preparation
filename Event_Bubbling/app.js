// but we diid not pass the 3rd parameter it show it is consider as a false so when you click on child
//child isclicked
//app.js:10 parents is clicked
//app.js:4 Grandparents is clicked

// above order will come


// document.querySelector("#grandparents").addEventListener("click", ()=> {
//     console.log("Grandparents is clicked")
// }, false)


// document.querySelector("#parents").addEventListener("click" , ()=>{

//     console.log("parents is clicked")
    
// },false)


// document.querySelector("#child").addEventListener("click",()=>{
//     console.log("child isclicked")
// },false)



// so but when we mark the third parameter the sequence is opposite
// click on child
// Grandparent
// parent
// child


// so here

/*
document.querySelector("#grandparents").addEventListener("click", ()=> {
    console.log("Grandparents is clicked")
}, true)


document.querySelector("#parents").addEventListener("click" , ()=>{

    console.log("parents is clicked")
    
},true)


document.querySelector("#child").addEventListener("click",()=>{
    console.log("child isclicked")
},true)

*/

// so when all here is true is capturing here 


// as you remember that propagation is happening that is too costly 

// so stop the propagation is e.stopPropogation is we need to pass


document.querySelector("#grandparents").addEventListener("click", (e)=> {
    console.log("Grandparents is clicked")
   
}, false) // capturing 


document.querySelector("#parents").addEventListener("click" , ()=>{

    console.log("parents is clicked")
    
},true)


document.querySelector("#child").addEventListener("click",(e)=>{
    console.log("child isclicked")
    e.stopPropagation();
},false)
