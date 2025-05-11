let p_tag = document.getElementById("pTag")
console.log(p_tag)
let content = p_tag.innerHTML
console.log(content)
p_tag.innerHTML = "Khoi 1901 2012"
p_tag.style.color = "red"
p_tag.style.backgroundColor = "black"

function tinhtong(a, b){
    c = a+b
    return c
}

let sum = tinhtong(10, 5)
console.log("sum = ", sum)