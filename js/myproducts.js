// let products = JSON.parse(localStorage.getItem("products")) || productsDB;

// console.log(products);


// console.log("my",myProducts);

let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProducts");

// Display products
//<a href="cartDetails.html">${item.title}</a>



let drawProductsUI;

// (function drawProductsUI(){
    (drawProductsUI = function(products=[]){
        let myProducts = products.filter((item) => item.isMe ==="Y");
        // console.log("My Products", myProducts);
        if(myProducts.length!=0){
        //    console.log("yes"); 
         let ProductsUI = myProducts.map((item)=>{
        // console.log("eee",item);
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
     
     <button class='edit-product' onclick='editProduct(${item.id})'> Edit Product </button>
     <br>
     <button class='edit-product' onclick='deleteProduct(${item.id})'> Delete Product </button>
      
     </div>

      
        </div>
      ` ;
    });
    productsDom.innerHTML = ProductsUI.join("");
}
else{
    noProductsDom.innerHTML = "No Products ||"
    // console.log("NO");
}
})(JSON.parse(localStorage.getItem('products')) || productsDB);



// Edit Product 
function editProduct(id){
    // console.log("id",id);
    localStorage.setItem("editProduct",id);

    window.location = "editProduct.html";
}


// Delete Product 
function deleteProduct(id){
    let products = JSON.parse(localStorage.getItem("products")) || productsDB;
    let myProducts = products.filter((item) => item.isMe ==="Y");
    // console.log("my",myProducts);
    let filtered = myProducts.filter((i)=>i.id !==id);
    // console.log("filter",filtered);
    let clickedItem = myProducts.find((i)=> i.id === id);
    products = products.filter((i)=> i.id !== clickedItem.id);
    // console.log(products);
    localStorage.setItem("products",JSON.stringify(products));
    drawProductsUI(filtered);
}