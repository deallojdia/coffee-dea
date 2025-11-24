
let order = JSON.parse(localStorage.getItem("order")) || [];
   function renderOrder() { 
let output = "";
    order.forEach((item ,index) => {
        output += `<div class='orderItem'>
            ${item.name} - ${item.price} leke
               <button onclick='removeItem(${index})'>Remove</button></div>`;
    });

    document.getElementById("orderList").innerHTML = output;


let total = 0;
order.forEach(item => total += Number(item.price));
document.getElementById("shuma").innerText = total + " leke";
localStorage.setItem("totalPagesa", total);
   }
function removeItem(index) {
            order.splice(index, 1); 
            localStorage.setItem("order", JSON.stringify(order)); 
            renderOrder(); 
        }

const vazhdo=document.getElementById('vazhdo');
vazhdo.addEventListener('click',()=>{
window.location.href='../html/pagesa.html';
}); 


renderOrder();