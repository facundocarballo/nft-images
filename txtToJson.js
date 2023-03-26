const fs = require('fs');
const readLine = require('readline');

const handleFile = async () => {
    const stream = fs.createReadStream('./privateImages.txt');
    const logger = fs.createWriteStream('./arrImages.txt');
    const rl = readLine.createInterface({
        input: stream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        const s = line.split('|');
        logger.write(`"${s[1].substring(1)}", \n`);
    }
}

const getUris = async () => {
    const stream = fs.createReadStream('./privateImages.txt');
    const rl = readLine.createInterface({
        input: stream,
        crlfDelay: Infinity
    });

    let i = 0;

    for await (const line of rl) {
        const s = line.split('|');
        const image_url = s[1].substring(1);

        const obj = {
            'name': 'Sinergy Bronze',
            'description': 'Ésta moneda representa una semilla de infinita abundancia. Con ella se puede crear un árbol de prosperidad. Aumentar ahorros para cumplir propósitos. Recibir numerosas recompensas pasivas y educación en criptofinanzas.',
            'image': image_url,
            'attributes': []
        }
        fs.writeFileSync(`./uris-v3/${i}.json`, JSON.stringify(obj));
        i++;
    }

}

getUris();

// handleFile();