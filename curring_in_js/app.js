// curring in JS

// so basically here we create a function those multiply by 2

let ans=function(x,y){
    console.log(x*y);
}

// her we use bind method to prove the curring of js

let multiplyoftwo=ans.bind(this,2); // so basically here x set be 2

multiplyoftwo(3);

// so basically curring method in js is do that we set predefined of any parameter which we passed


// so another way of doing function curring is Closure



// this is the simple snippet of closure
let anss=function(x){
    return function(y){
        console.log(x*y)
    }
}


let multiplyofthre=anss(3);
multiplyofthre(4) // 12