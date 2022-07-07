var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
        1,
        1,
        0,
        1,
        0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
}

let section = document.querySelector(".section");

let leftdiv = document.createElement("div")
let rightdiv = document.createElement("div")

leftdiv.classList.add('left_div')
rightdiv.classList.add('right_div')

leftdiv.innerHTML = `<img src='${productData.preview}'
alt="image loading error">`;

rightdiv.innerHTML = `
<div class="product-description">
<div class="text">
    <h1 class="name">${productData.name}</h1>
    <h4 class="brand">${productData.brand}</h4>
    <p class="price">Price: Rs <span>${productData.price}</span></p>
    <div class="description">
        <h4>Description</h4>
        <p>${productData.description}</p>
    </div>
</div>
<div class="preview">
    <h4>Product Preview</h4>
    <div class="previewimg">
        <img id="img1"
            src="${productData.photos[0]}"
            alt="image loading error">
        <img id="img2"
            src="${productData.photos[1]}"
            alt="image loading error">
        <img id="img3"
            src="${productData.photos[2]}"
            alt="image loading error">
        <img id="img4"
            src="${productData.photos[3]}"
            alt="image loading error">
        <img id="img5"
            src="${productData.photos[4]}"
            alt="image loading error">
        <img id="img6"
         src="${productData.photos[5]}"
         alt=" ">
    </div>
    <div class="btn">
        <button>Add to Cart</button>
    </div>
</div>
</div>`

section.append(leftdiv)
section.append(rightdiv)

let previewimg = document.querySelector(".previewimg")
// console.log(previewimg)

function onclickhandler(e) {
    if(e.target.nodeName ==='IMG'){
    currentsrc = e.target.src;
    document.querySelector(".left_div img").src = currentsrc;
    let allpreviewimg = previewimg.children
    for (var i = 0; i < allpreviewimg.length; i++) {
        allpreviewimg[i].classList.remove('currentborder');
    }
    e.target.classList.add('currentborder')
}
}
previewimg.addEventListener('click', onclickhandler)

