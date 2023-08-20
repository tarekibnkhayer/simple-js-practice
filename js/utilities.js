function setTextInTextArea(productName){
    const listContainer = document.getElementById('listContainer');
    const p = document.createElement("p");
    p.classList.add("my-4")
    const count = listContainer.childElementCount;
    p.innerHTML = `${count + 1}. ${productName}`;
    listContainer.appendChild(p);
}