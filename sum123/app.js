let sum = a => {
    return b =>{

        return b ? sum(a+b) : a

    }
}

console.log(sum(10)(1)(2)(3)())
