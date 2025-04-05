let getLang = localStorage.getItem("langDir");
if(getLang){
    if(getLang=="rtl"){
        changeDir("rtl");
    } else {
        changeDir("ltr");
    }
}

// Change direction
let en = document.getElementById("en_lang");
let ar = document.getElementById("ar_lang");

en.addEventListener("click",()=>changeDir("ltr"));
ar.addEventListener("click",()=>changeDir("rtl"));

function changeDir (dir){
    document.documentElement.setAttribute("dir",dir); // معناها عاوز امسك تاج html  documentElement
    localStorage.setItem("lanDir",dir);
}
