const socket = io();

function render(data) {
        var tbodyRef = document.getElementById('addProduct')
        
        var newRow = tbodyRef.insertRow();
        var newCellTitle = newRow.insertCell();
        var newCellPrice = newRow.insertCell();
        var newCellThumbnail = newRow.insertCell();

        var newTextTitle = document.createTextNode(data.title);
        var newTextPrice = document.createTextNode(data.price);
        var newTextThumbnail = document.createTextNode(data.thumbnail);
        
        newCellTitle.appendChild(newTextTitle);
        newCellPrice.appendChild(newTextPrice);
        newCellThumbnail.appendChild(newTextThumbnail);
}

socket.on('productList', function(data) { render(data); });

function addProduct(e) {
    const product = {
        price: document.getElementById('price').value,
        title: document.getElementById('title').value,
        thumbnail: document.getElementById('thumbnail').value
    };
    socket.emit('new-product', product);
    return false;
}
