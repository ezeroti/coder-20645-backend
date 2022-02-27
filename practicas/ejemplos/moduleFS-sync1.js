const fs = require('fs');

const saveFile = name => {
    try {
        const date = Date()
        fs.writeFileSync(name, date,'utf-8');
        console.log(fs.readFileSync(name,'utf-8'));
    } catch (err) {
        throw new Error(`No se encuentra el archivo pa!: ${err.message}`);
    }
}

saveFile('fyh.txt'); 