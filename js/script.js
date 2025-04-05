// localStorage.setItem(key, value); //to sava data on local storage OR local browser 
/*
localStorage.setItem("name","karim");
var x=localStorage.getItem("name");
console.log(x); // karim
console.log(localStorage.getItem("test")); // null
localStorage.removeItem("name");
*/
/*
localStorage.setItem("name","Gmail");
localStorage.setItem("test","123");
// localStorage.removeItem("name");
localStorage.clear();
*/
/********************************************* */
// let userInfo = document.querySelector("#user_info");
// let userDom = document.querySelector("#user");
// let links = document.querySelector("#links");
// let logoutBtn = document.querySelector("#logout");

// let username = localStorage.getItem("username");
// if(username) {
//     links.remove();
//     userInfo.style.display = "flex";
//     userDom.innerHTML = username
// }

// logoutBtn.addEventListener('click',function(){
//     localStorage.clear();
//     setTimeout(()=>{
//         window.location="register.html";
//     },1500);

// });

/********************************** */



// Define Product

let productsDom = document.querySelector(".products");
// let cartProductMenu = document.querySelector(".carts-products");
// let cartProductDivDom = document.querySelector(".carts-products div");
// let shoppingCartIcon = document.querySelector(".shoppingCart");
// let badgeDom = document.querySelector(".badge"); 
// let products = JSON.parse(localStorage.getItem('products')); 
let products = productsDB;
// JSON.parse() // string to obj
// JSON.stringify() // obj to string


// let products = [ // اوبجيكت دا عبارة عن استرينج 
//      //    "{
//     //     id:1,
//     //     title:"headphone item",
//     //     size:'large',
//     //     imageUrl: 'images/headphone.avif'
//     // }, "
     
//     {
//     id:1,
//     title:"headphone item",
//     size:'large',                            
//     imageUrl: 'images/headphone.avif'
// },
// {
//     id:2,
//     title:"Laptop item",
//     size:'small',
//     imageUrl: 'images/laptop.jpg'
// },
// {
//     id:3,
//     title:"Glasses item",
//     size:'large',
//     imageUrl: 'images/glasses.avif'
// },
// {
//     id:4,
//     title:"Watch item",
//     size:'large',
//     imageUrl: 'images/watch.avif'
// }
// ];

// Open Cart Menu

shoppingCartIcon.addEventListener("click",openCartMenu);

// Display products
//<a href="cartDetails.html">${item.title}</a>

let drawProductsUI;

// (function drawProductsUI(){
    (drawProductsUI = function(products=[]){
    let ProductsUI = products.map((item)=>{
        console.log("eee",item);
        return   `
        <div class="product-item" style="border: ${
            item.isMe==="Y" ? "2px solid green":""
            }">
        <img src="${item.imageUrl}" 
        class="product-item-img"
        alt="image"/>
        <div class="product-item-desc">
        <a onclick="saveItemData(${item.id})">${item.title}</a>
                
     <p>${item.desc}</p>
     <span>Size:${item.size}</span>
     ${item.isMe==="Y" ? "<button> Edit Product </button>" : "" }
     ${item.isMe==="Y" && "<button class='edit-product' onclick='editProduct("+item.id+")'> Edit Product </button>"}
     </div>
            <div class="product-item-actions">
                <button class="add-to-cart" onclick="addedToCart(${item.id})">Add to Cart</button>
                <i class="favorite far fa-heart" style="color:${
                    item.liked==true ? "red": ""
                }" onclick="addToFavourite(${item.id})"></i>
            </div>
        </div>
      ` ;
    });
    productsDom.innerHTML = ProductsUI.join("");
})(JSON.parse(localStorage.getItem('products')) || products);
// drawProductsUI();

// let addedItem =[]

// Check If there is item in LocalStorage
// let addedItem = localStorage.getItem('productsInCart') 
// ? JSON.parse(localStorage.getItem('productsInCart')) : [];

// if(addedItem){
//     addedItem.map((item) =>{
//         cartProductDivDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
//     });
//     badgeDom.style.display ="block";
//     badgeDom.innerHTML += addedItem.length;
// }

// (function cartMenuData(){
//     let addedItem = localStorage.getItem('productsInCart') 
// ? JSON.parse(localStorage.getItem('productsInCart')) : [];

// if(addedItem){
//     addedItem.map((item) =>{
//         cartProductDivDom.innerHTML += `<p>${item.title}</p>`
//     });
//     badgeDom.style.display ="block";
//     badgeDom.innerHTML += addedItem.length;
// }

// })();

// Add To Cart
// let allItems = [];
function addedToCart(id) {

    if(localStorage.getItem('username')){
        // window.location="cartproducts.html"
        // console.log("added To Cart")
          // console.log(id);
          let products = JSON.parse(localStorage.getItem('products')) || products;
        let product = products.find((item)=> item.id === id);
        let isProductinCart = addedItem.some((i) => i.id === product.id) ;
        // console.log("items",item)
        if(isProductinCart){
            // choosenItem.qty +=1;
            addedItem = addedItem.map(p=>{
                if(p.id === product.id)p.qty +=1;
                return p;
            });
        }else{
            addedItem.push(product);
            // console.log("a",allItems);
        }
        
     //  UI
        cartProductDivDom.innerHTML= "";
        addedItem.forEach(item=>{
            cartProductDivDom.innerHTML += `<p> ${item.title} <span class='item-qty'>${item.qty}<span> </p> `;
        } );

        // console.log(choosenItem);

       // cartProductDivDom.innerHTML += `<p> ${choosenItem.title}</p> `;

        // addedItem = [...addedItem,choosenItem];
        // let uniqueProducts = getUniqueArr(addedItem,"id");
        // localStorage.setItem("productsInCart",JSON.stringify(uniqueProducts)); // JSON.stringify ===> to return object to string

        // Save data
        localStorage.setItem("productsInCart",JSON.stringify(addedItem)); // JSON.stringify ===> to return object to string
    

        // localStorage.setItem("productsInCart",JSON.stringify(addedItem)); // JSON.stringify ===> to return object to string
    
//      Add counter of Items  
        let cartProductItems = document.querySelectorAll(".carts-products div p");
        // console.log(cartProductItems);
        badgeDom.style.display="block";
        badgeDom.innerHTML= cartProductItems.length ;
    }   else{
        window.location="login.html"
    }

    // // console.log(id);
    // let choosenItem = products.find((item)=> item.id === id);
    // // console.log(choosenItem);
    // cartProductDivDom.innerHTML += `<p> ${choosenItem.title}</p> `;

    // let cartProductItems = document.querySelectorAll(".carts-products div p");
    // // console.log(cartProductItems);
    // badgeDom.style.display="block";
    // badgeDom.innerHTML= cartProductItems.length ;
}

function getUniqueArr(arr,filterType){
    // [1,1,1]
    let unique =arr
    .map((item)=> item[filterType]) // [1,1]
    .map((item,i,final) =>final.indexOf(item)===i && i)
    .filter((item)=>arr[item])
    .map((item => arr[item]))

    return unique;
    // console.log(unique);
}




// function checkLogedUser(){
//     if(localStorage.getItem('username')){
//         // window.location="cartproducts.html"
//         console.log("added To Cart")
//     }else{
//         window.location="login.html"
//     }
// }

// //Open Cart Menu
// function openCartMenu() {
//     if(cartProductDivDom.innerHTML !=""){
//         if(cartProductMenu.style.display=="block"){
//             cartProductMenu.style.display ="none";
//         }
//         else{
//         cartProductMenu.style.display="block";
//         }
//     }
// }

// Save Item Date
function saveItemData(id){
    localStorage.setItem('productId',id);
    window.location = "cartDetails.html";
}


// Search Function
let input = document.getElementById('search')

input.addEventListener('keyup', function(e){
 //   if(e.keyCode ===13){ // 13 =======> code button (Enter)
        // console.log("Enter");
    search(e.target.value,JSON.parse(localStorage.getItem('products')));
//}
if(e.target.value.trim()===""){
    drawProductsUI(JSON.parse(localStorage.getItem('products')));
}

});
function search(title,myArray){
    // for(var i = 0;i < myArray.length; i++){
    //     if(myArray[i].title===title){
    //         console.log(myArray[i]);
    //     }
    // }
    //let arr = myArray.filter((item) => item.title===title);
    let arr = myArray.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1 );
    
    // console.log(arr);
    drawProductsUI(arr);
}
// search("headphone item", JSON.parse(localStorage.getItem("products")));

//////////////////////////////////////

// Add To Favourite
let favouriteItems = localStorage.getItem('productsFavourite')
? JSON.parse(localStorage.getItem("productsFavourite"))
: [];
// let favouriteItems =[]
function addToFavourite(id) {

    if(localStorage.getItem('username')){
        
        let choosenItem = products.find((item)=> item.id === id);
        choosenItem.liked=true;


        favouriteItems=[...favouriteItems,choosenItem];

        let uniqueProducts=getUniqueArr(favouriteItems,"id");
        
        localStorage.setItem("productsFavourite",JSON.stringify(uniqueProducts)); // JSON.stringify ===> to return object to string

        products.map(item=>{
            if(item.id===choosenItem.id){
                item.liked=true;
            }
        });
        localStorage.setItem("products",JSON.stringify(products));
        drawProductsUI(products)

    }   else{
        window.location="login.html"
    }
}

// Filter Products By Size
let sizeFilter = document.getElementById("size-filter");

sizeFilter.addEventListener("change",getProductFilterBySize);

function getProductFilterBySize(e){
    // console.log(e.target.value);
    let val = e.target.value;
    let products = JSON.parse(localStorage.getItem("products")) || products;

    if (val === "all"){
        drawProductsUI(products);
    } else {
        products = products.filter((i)=>i.size===val);
        drawProductsUI(products);
    }
}


// Edit Product 
function editProduct(id){
    // console.log("id",id);
    localStorage.setItem("editProduct",id);

    window.location = "editProduct.html";

}

// // Change direction
// let en = document.getElementById("en_lang");
// let ar = document.getElementById("ar_lang");

// en.addEventListener("click",()=>changeDir("ltr"));
// ar.addEventListener("click",()=>changeDir("rtl"));

// function changeDir (dir){
//     document.documentElement.setAttribute("dir",dir); // معناها عاوز امسك تاج html  documentElement
//     localStorage.setItem("lanDir",dir);
//}

