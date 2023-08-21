const totalPrice = document.getElementById("totalPriceAmount");
const totalPriceString = totalPrice.innerText
let totalPriceAmount = parseFloat(totalPriceString);
function setTextInListContainer(productName){
    const listContainer = document.getElementById('listContainer');
    const p = document.createElement("p");
    p.classList.add("my-4")
    const count = listContainer.childElementCount;
    p.innerHTML = `${count + 1}. ${productName}`;
    listContainer.appendChild(p);
}
function convertPriceStringIntoANumber(priceId){
    const priceString = document.getElementById(priceId).innerText;
    const priceAmount = parseFloat(priceString);
    return priceAmount;
}
function setTotalPrice (totalPriceAmount){
    totalPrice.innerText = totalPriceAmount;
    if (totalPriceAmount >= 200){
        const applyButton = document.getElementById("applyButton");
        applyButton.removeAttribute("disabled");
        applyButton.addEventListener("click", function() {
        const couponCode = document.getElementById("couponCode").value ;
        if (couponCode === "SELL200"){
            const discount = document.getElementById("discount");
            const discountAmount = totalPriceAmount * 0.2;  //same as 20 percent
            discount.innerText = discountAmount.toFixed(2);
            const total = document.getElementById("total");
            const totalAmount = totalPriceAmount - discountAmount;
            total.innerText = totalAmount;
        }
        else {alert("sorry your coupon code is not correct ")}
        })
    }
}
function setTotal(totalPriceAmount){
    const total = document.getElementById("total");
    total.innerText = totalPriceAmount;
}