const socket = io();

socket.on('productList', function(data) { 
    const tbodyRef = document.getElementById('addProduct')
    const img = document.createElement('img');

    const newRow = tbodyRef.insertRow();
    const newCellTitle = newRow.insertCell();
    const newCellPrice = newRow.insertCell();
    const newCellThumbnail = newRow.insertCell();

    const newTextTitle = document.createTextNode(data.title);
    const newTextPrice = document.createTextNode(`$${data.price}`);
    img.src = data.thumbnail;
    img.style.height = "50px"
    img.style.width = "50px"

    newCellTitle.appendChild(newTextTitle);
    newCellPrice.appendChild(newTextPrice);
    newCellThumbnail.appendChild(img);
 });

function addProduct(e) {
    const product = {
        price: document.getElementById('price').value,
        title: document.getElementById('title').value,
        thumbnail: document.getElementById('thumbnail').value
    };
    socket.emit('new-product', product);
    return false;
}
