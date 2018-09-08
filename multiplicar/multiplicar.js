//requireds

const fs = require('fs');
//const fs = require('express');
//const fs = require('./');

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++){
        console.log(`${base} * ${i} = ${base*i}`)
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject)=>{

        if (!Number(base)){
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base*i}\n`;
        }


        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}

