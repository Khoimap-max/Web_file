function tinhtong(a){
    let i = 0
    let x = 0
    while (i <= a){
        x = x+i
        i = i+1
    }
    return x
}
let sum = tinhtong(4)
console.log("sum = ", sum)