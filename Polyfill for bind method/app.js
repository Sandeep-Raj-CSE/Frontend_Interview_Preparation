
let nam1={
    firstname:"akshay",
    lastname : "saini",


    // create a method here to print the full name


}

let  printfullname=function (hometown){

    // here this -> send the like as go to the nam1 denote
    console.log(this.firstname + " " + this.lastname + "From" + hometown);
}

let ans =printfullname.bind(nam1,"pakistan")
//console.log(ans);
ans();