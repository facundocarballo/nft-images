require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

console.log(cloudinary.config().cloud_name);

const getTanda = (nftNumber) => {
    if (nftNumber < 10000) return 'tanda1';
    if (nftNumber < 20000) return 'tanda2';
    if (nftNumber < 30000) return 'tanda3';
    if (nftNumber < 40000) return 'tanda4';
    if (nftNumber < 50000) return 'tanda5';
    return 'tanda6';
}

const handleUploadImage = async () => {
    let json = new Array();
    let nftNumber = 1;
    let id = 1;
    const LIMIT = 9;

    const logger = fs.createWriteStream('./privateImages.txt', {
        flags: 'w'
    });
    
    for (let a = 0; a < LIMIT; a++) {
        for (let b = 0; b < LIMIT; b++) {
            for (let c = 0; c < LIMIT; c++) {
                for (let d = 0; d < LIMIT; d++) {
                    for (let e = 0; e < LIMIT; e++) {
                        let res = null;

                        try {

                            res = await cloudinary.uploader.upload(`./${getTanda(nftNumber)}/HEAD_${id}.png`, {
                                resource_type: 'image',
                            });

                            json.push({
                                name: `${a}-${b}-${c}-${d}-${e}.png`,
                                url: res.secure_url
                            });

                            logger.write(`${a}-${b}-${c}-${d}-${e}.png | ${res.secure_url}\n`);

                            console.log(`${a}-${b}-${c}-${d}-${e}.png | Escrito!`);

                        } catch(err) {
                            console.log("No se pudo subir: " + `./${getTanda(nftNumber)}/HEAD_${id}.png`);
                            console.log("Error: ", err);
                        };
                        
                        

                        nftNumber++;
                        id++;

                        if (id > 10000) id = 1;
                    }
                }
            }
        }
    }


    fs.writeFileSync('./privateImages.json', JSON.stringify(json));
    
}

handleUploadImage();