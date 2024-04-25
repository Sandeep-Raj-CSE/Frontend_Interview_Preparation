

/*
// so here we talk about the call, apply, bind method in js


let nam1={
    firstname:"akshay",
    lastname : "saini",


    // create a method here to print the full name

    printfullname:function(){

        // here this -> send the like as go to the nam1 denote
        console.log(this.firstname + " " + this.lastname);
    }


}
nam1.printfullname(); // akshai saini 

let name2={
    firstname:"sandeep",
    lastname:"Raj"
}

// so basicall call method will do the brrowing of the function from another

nam1.printfullname.call(name2) // sandeep Raj


*/





// so here we talk about the call when we pass the different parameter through bind


let nam1={
    firstname:"akshay",
    lastname : "saini",


    // create a method here to print the full name


}

let  printfullname=function (hometown){

    // here this -> send the like as go to the nam1 denote
    console.log(this.firstname + " " + this.lastname + "From" + hometown);
}
// so here first arugment always thr refrence and other have parameter 
printfullname.call(nam1,"patna"); // akshai saini 

let name2={
    firstname:"sandeep",
    lastname:"Raj"
}

// so basicall call method will do the brrowing of the function from another

printfullname.call(name2,"warisaling") // sandeep Raj


// APPLY METHOD

// it is similar to the call method only difference is the pass the function 

// in apply method we pass the function as the arrgument of array


printfullname.apply(name2,["nawada"])



// Bind method

// for bind method just similar to call method but he return as a function so we need to revoke 
// function 


let ans =printfullname.bind(nam1,"pakistan")
//console.log(ans);
ans();