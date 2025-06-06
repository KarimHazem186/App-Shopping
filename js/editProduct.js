 // Variables
let products = JSON.parse(localStorage.getItem('products')) || productsDB;
// console.log("P",products);
let productId = JSON.parse(localStorage.getItem("editProduct"));
let getProduct = products.find((i) => i.id === productId) ;

// console.log(getProduct);
console.log("before Update",getProduct);


let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productSizeSelect = document.getElementById("product-size");
let updateForm =document.getElementById("update-form");
let inputFile = document.getElementById("upload-image-file");
let productSizeValue;
let productImage;

productName.value = getProduct.title;
productDesc.value = getProduct.desc;
productSizeSelect.value = getProduct.size;
productImage =getProduct.imageUrl;

// Events
productSizeSelect.addEventListener('change', getProductSizeValue);
updateForm.addEventListener('submit', updateProductFun);
inputFile.addEventListener('change', uploadImage);

// Functions
function getProductSizeValue(e){
    // console.log(e.target.value);
    productSizeValue = e.target.value;
}


function updateProductFun(e){
    e.preventDefault();

    // console.log(productName.value);
    getProduct.title = productName.value;
    getProduct.desc = productDesc.value;
    getProduct.size = productSizeValue;
    getProduct.imageUrl = productImage;

    console.log("After update",getProduct);

    localStorage.setItem('products', JSON.stringify(products));

    setTimeout(()=>{
       window.location="index.html" 
    },500)

}


// upload Image
function uploadImage(){
    let file =this.files[0];
    // console.log(file);
    
    let types = ["image/jpeg","image/png"];
    
    if (types.indexOf(file.type)== -1){
        alert("Type not Supported");
        return;
    }
    getImageBase64(file);
    
    // productImage = URL.createObjectURL(file);
}

function getImageBase64(file){
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function() {
        // console.log(reader.result);
       productImage = reader.result;
    };
    reader.onerror = function(){
        alert("Error !!")
    };
}
