let productList = [
    {
        id: 1,
        title: 'Iphone 16 XS Max',
        description: 'Iphone 16 New New New 1000%'
    }, 
    {
        id: 2,
        title: 'Iphone 15 Pro Max',
        description: 'Iphone 15 New New Pro 1000%'
    },
    {
        id: 3,
        title: 'Iphone 17',
        description: 'Iphone 17 New New Pro 1000%'
    },
    {
        id: 4,
        title: 'Iphone 18',
        description: 'Iphone 18 New New Pro 1000%'
    },
    {
        id: 5,
        title: 'Iphone 18 Pro',
        description: 'Iphone 18 New New Pro 1000%'
    }
]

let products = document.getElementById('product-list')
let body = ``
productList.forEach(item => {
    body += `<div class="product-item">
                <h2 class="title">${item.title}</h2>
                <p class="description">${item.description}</p>
                <button id="btnAddToCart" data-id="${item.id}" data-title="${item.title}" data-description="${item.description}">Add To Cart</button>
            </div>`
})

products.innerHTML = body

let btnAddToCart = document.querySelectorAll("#btnAddToCart")
console.log(btnAddToCart)

let productCart = []

btnAddToCart.forEach(btn =>{
    btn.onclick = function(){
        let id = btn.getAttribute("data-id")
        let title = btn.getAttribute("data-title")
        let description = btn.getAttribute("data-description")

        console.log("Id = ", id)
        console.log("Title = ", title)
        console.log("Description = ", description)

        let product = {
            id: id,
            title: title,
            description: description
        }

        productCart.push(product)

        localStorage.setItem("cart", JSON.stringify(productCart))
    }
})

let btnRedirectCart = document.querySelector("#btnRedirectCart")
btnRedirectCart.onclick = function(){
    window.location.href = "./cart.html"
}