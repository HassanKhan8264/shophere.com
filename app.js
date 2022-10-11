const addToCart = (arg) =>{
    let cartMenu = document.getElementById("cart-menu")    
    if(arg === '0'){
        let pDiv = document.createElement("div")
        pDiv.setAttribute("class","pdiv")
        let productImage = document.createElement("img")
        productImage.setAttribute("class","productImage")
        productImage.src = "./prodect-images/IMG-20210703-WA0009_2.jpg"

        let productPrice = document.createElement("span")
        productPrice.innerHTML = document.getElementById("price0").innerText

        let removeProduct = document.createElement("button")
        removeProduct.innerHTML = "X"
        removeProduct.setAttribute("onclick", "cancelProduct()")

        pDiv.appendChild(productPrice)
        pDiv.appendChild(productImage)
        pDiv.appendChild(removeProduct)
        cartMenu.appendChild(pDiv)

        let product0 = {
            img : document.getElementById("img0").src,
            name:document.getElementById("name0").innerText,
            price:document.getElementById("price0").innerText
            }
            let productDetails = JSON.stringify(product0)
            window.localStorage.setItem("product0",productDetails)
    }
    if(arg === '1'){
        let product1 = {
            img : document.getElementById("img1").src,
            name:document.getElementById("name1").innerText,
            price:document.getElementById("price1").innerText
            }
            let productDetails = JSON.stringify(product1)
            window.localStorage.setItem("product1",productDetails)
    }
    if(arg === '2'){
        let product2 = {
            img : document.getElementById("img2").src,
            name:document.getElementById("name2").innerText,
            price:document.getElementById("price2").innerText
            }
            let productDetails = JSON.stringify(product2)
            window.localStorage.setItem("product2",productDetails)
    }
    if(arg === '3'){
        let product3 = {
            img : document.getElementById("img3").src,
            name:document.getElementById("name3").innerText,
            price:document.getElementById("price3").innerText
            }
            let productDetails = JSON.stringify(product3)
            window.localStorage.setItem("product3",productDetails)
    }
   
    // let img = document.getElementById("img")
    // let itemName = document.getElementById("name")
    // let price = document.getElementById("price")
    // console.log(img.src)
    // console.log(itemName.innerHTML)
    // console.log(price.innerHTML)
}



const viewGallery = (arg) => {
    if(arg === '0'){
        let cart = document.getElementById("cart0")
        cart.style.display = "none";
        let priceDiv = document.getElementById("name-price0")
        priceDiv.style.display = "none";
        let close0 = document.getElementById("close0")
        close0.style.display = "block";
        let img = document.getElementById("img0")
        img.style.height = "320px";
    }
    if(arg === '1'){
        let cart = document.getElementById("cart1")
        cart.style.display = "none";
        let priceDiv = document.getElementById("name-price1")
        priceDiv.style.display = "none";
        let close1 = document.getElementById("close1")
        close1.style.display = "block";
        let img = document.getElementById("img1")
        img.style.height = "320px";
    }
    if(arg === '2'){
        let cart = document.getElementById("cart2")
        cart.style.display = "none";
        let priceDiv = document.getElementById("name-price2")
        priceDiv.style.display = "none";
        let close2 = document.getElementById("close2")
        close2.style.display = "block";
        let img = document.getElementById("img2")
        img.style.height = "320px";
    }
    if(arg === '3'){
        let cart = document.getElementById("cart3")
        cart.style.display = "none";
        let priceDiv = document.getElementById("name-price3")
        priceDiv.style.display = "none";
        let close2 = document.getElementById("close3")
        close2.style.display = "block";
        let img = document.getElementById("img3")
        img.style.height = "320px";
    }
   
}

const cl = (arg) => {
    if(arg === '0'){
        let cart = document.getElementById("cart0")
    cart.style.display = "block";
    let priceDiv = document.getElementById("name-price0")
    priceDiv.style.display = "block";
    let close0 = document.getElementById("close0")
    close0.style.display = "none";
    let img = document.getElementById("img0")
    img.style.height = "275px";
    }
    if(arg === '1'){
    let cart = document.getElementById("cart1")
    cart.style.display = "block";
    let priceDiv = document.getElementById("name-price1")
    priceDiv.style.display = "block";
    let close1 = document.getElementById("close1")
    close1.style.display = "none";
    let img = document.getElementById("img1")
    img.style.height = "275px";
    }
    if(arg === '2'){
    let cart = document.getElementById("cart2")
    cart.style.display = "block";
    let priceDiv = document.getElementById("name-price2")
    priceDiv.style.display = "block";
    let close2 = document.getElementById("close2")
    close2.style.display = "none";
    let img = document.getElementById("img2")
    img.style.height = "275px";
    }
    if(arg === '3'){
    let cart = document.getElementById("cart3")
    cart.style.display = "block";
    let priceDiv = document.getElementById("name-price3")
    priceDiv.style.display = "block";
    let close3 = document.getElementById("close3")
    close3.style.display = "none";
    let img = document.getElementById("img3")
    img.style.height = "275px";
    }
   
}

const cancelProduct = () => {
    let pDiv = document.querySelector(".pdiv")
    pDiv.setAttribute("class","remove");
}