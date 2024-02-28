const refheading = document.getElementById("main-heading");

refheading.textContent = "Fruit World";

refheading.style.color = "orange";

const res = document.getElementById("header");

res.style.backgroundColor = "green";

res.style.borderBottom = "3px solid orange";

const ans =document.getElementById("basket-heading");

ans.style.color = "green";

const final = document.getElementById("thanks");
final.innerHTML = "<p>Please visit us again</p>"


const ans = document.getElementsByClassName("fruit");
ans[2].style.backgroundColor = "yellow";
for(let i = 0;i<ans.length;i++){
  ans[i].style.fontWeight = "bold";
}