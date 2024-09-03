var productContainer = document.getElementById("product");
var search = document.getElementById("products-search");
var elements = productContainer.querySelectorAll("div");

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase();
    
    for(count=0;count<elements.length;count=count+1){
        
        var productName = elements[count].querySelector("p").textContent;
        if(productName.toUpperCase().indexOf(enteredValue)<0){
            elements[count].style.display = "none";
        }
        else{
            elements[count].style.display = "block";
        }
    }
})

