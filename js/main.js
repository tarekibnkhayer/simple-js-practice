
document.getElementById("firstCard").addEventListener("click", function(){
    const productName = document.getElementById("productName1").innerText;
    setTextInListContainer(productName);
    const price = convertPriceStringIntoANumber("price1");
    totalPriceAmount += price;
    setTotalPrice(totalPriceAmount);
    setTotal(totalPriceAmount);
})
document.getElementById("secondCard").addEventListener("click", function(){
    const productName = document.getElementById("productName2").innerText;
    setTextInListContainer(productName);
    const price = convertPriceStringIntoANumber("price2");
    totalPriceAmount += price;
    setTotalPrice(totalPriceAmount);
    setTotal(totalPriceAmount);
})
document.getElementById("thirdCard").addEventListener("click", function(){
    const productName = document.getElementById("productName3").innerText;
    setTextInListContainer(productName);
    const price = convertPriceStringIntoANumber("price3");
    totalPriceAmount += price;
    setTotalPrice(totalPriceAmount);
    setTotal(totalPriceAmount);
})
document.getElementById("fourthCard").addEventListener("click", function(){
    const productName = document.getElementById("productName4").innerText;
    setTextInListContainer(productName);
    const price = convertPriceStringIntoANumber("price4");
    totalPriceAmount += price;
    setTotalPrice(totalPriceAmount);
    setTotal(totalPriceAmount);
})
document.getElementById("fifthCard").addEventListener("click", function(){
    const productName = document.getElementById("productName5").innerText;
    setTextInListContainer(productName);
    const price = convertPriceStringIntoANumber("price5");
    totalPriceAmount += price;
    setTotalPrice(totalPriceAmount);
    setTotal(totalPriceAmount);
})
document.getElementById("sixthCard").addEventListener("click", function(){
    const productName = document.getElementById("productName6").innerText;
    setTextInListContainer(productName);
    const price = convertPriceStringIntoANumber("price6");
    totalPriceAmount += price;
    setTotalPrice(totalPriceAmount);
    setTotal(totalPriceAmount);
})
