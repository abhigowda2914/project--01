const refheading = document.getElementById("main-heading");

refheading.textContent = "Fruit World";

refheading.style.color = "orange";

const res = document.getElementById("header");

res.style.backgroundColor = "green";

res.style.borderBottom = "3px solid orange";

const ans =document.getElementById("basket-heading");

ans.style.color = "green";

const val = document.getElementsByClassName("fruit");
val[2].style.backgroundColor = "yellow";
for(let i = 0;i<val.length;i++){
  val[i].style.fontWeight = "bold";
}


const final = document.getElementById("thanks");
final.innerHTML = "<p>Please visit us again</p>"