

const final = document.getElementById("thanks");
final.innerHTML = "<p>Please visit us again</p>"

const listItem = document.getElementsByTagName("li");
listItem[4].style.color = "blue";

for(let i = 0;i<listItem.length;i++){
  listItem[i].style.fontStyle = "italic";
}


const mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign = "right";

const headfruits = document.querySelector(".fruits");

headfruits.style.backgroundColor = "grey";
headfruits.style.padding = "30px";
headfruits.style.margin = "30px";
headfruits.style.width = "50%";
headfruits.style.borderRadius = "5px";
 headfruits.style.listStyleType = "none";

const basketHeading = document.querySelector("h2");
basketHeading.style.marginLeft = "30px";
basketHeading.style.color = "brown";

const fruititem = document.querySelectorAll('.fruit');

for(let i = 0;i<fruititem.length;i++){
  fruititem[i].style.backgroundColor="white";
  fruititem[i].style.padding = "10px";
  fruititem[i].style.borderRadius = "5x";
  fruititem[i].style.margin = "10px";
}

const counteven = document.querySelectorAll('.fruit:nth-child(even)');

for(let i = 0;i<counteven.length;i++){
  counteven[i].style.backgroundColor = "red";
  counteven[i].style.color ="white";
}

  


