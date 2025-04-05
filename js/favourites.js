// let productsInCart = localStorage.getItem("productsInCart");
let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProducts");
// if (productsInCart){
//     let items = JSON.parse(productsInCart); // JSON.parse() ===> to return string to object
//     drawCartProductsUI(items);
// }
function drawFavouritesProductsUI(allproducts = []){
    if(JSON.parse(localStorage.getItem("productsFavourite")).length===0){
      noProductsDom.innerHTML = "There is no items !!";
    }
    let products = JSON.parse(localStorage.getItem('productsFavourite')) || allproducts  ;
    let ProductsUI = products.map((item)=>{
      return   `
        <div class="product-item">
            <img src="${item.imageUrl}" 
            class="product-item-img"
            alt="image"/>
            <div class="product-item-desc">
                <h2>${item.title}</h2>
                <p>${item.desc}</p>
                <span>Size:${item.size}</span>
                <span>Quantity:${item.qty}</span>
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">Remove From Favourite</button>   
           
           </div>
        </div>
      ` ;
    });
    productsDom.innerHTML = ProductsUI;
}

drawFavouritesProductsUI();

function removeItemFromCart(id){
  // console.log(id);
  let productsFavourite = localStorage.getItem('productsFavourite');
  if(productsFavourite){

    let items = JSON.parse(productsFavourite);
    
    let filteredItems= items.filter((item) => item.id !==id);
    // console.log(filteredItems);
    localStorage.setItem("productsFavourite",JSON.stringify(filteredItems));
    drawFavouritesProductsUI(filteredItems);
  }
}
