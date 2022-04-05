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

socket.on('messages', function(data) { 
    const html = data.map(elem => {
        return(`<div>
            <strong style="color: CornflowerBlue">${elem.email}</strong> 
            <span style="color: Brown">[${elem.date}]</span> : 
            <em style="color: green; font-style: italic">${elem.text}</em> </div>`)
        }).join(" ");
    document.getElementById('messages').innerHTML = html;
});

function addMsgChat(e) {
    socket.emit('checkData', { email: document.getElementById('user').value, text: document.getElementById('msg').value });
    return false;
}