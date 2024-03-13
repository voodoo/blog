// optimize-images.js
const sharp = require('sharp');
const fs    = require('fs');
const path  = require('path');


const directoryPath = path.join(__dirname, 'public/images');
const optimPath     = path.join(__dirname, 'public/optim');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    files.forEach((file) => {
        //why is fileName undefined?

        console.log(`Optimizing image: ${path.parse(file).name}`);
        
        sharp(`${directoryPath}/${file}`)
            .resize(800) // width of 800px
            .webp({ quality: 80 }) // convert to jpeg format with 80% quality
            .toFile(`${optimPath}/${path.parse(file).name}.webp`)
            .then(() => console.log(`Image optimized: ${path.parse(file).name}`))
            .catch((err) => console.log(err));
    });
});