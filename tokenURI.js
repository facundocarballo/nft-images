const fs = require('fs');

const getCID = (nftNumber) => {
    if (nftNumber < 10000) return 'QmZFKF7WysHmseHApvYTTpaTHBcdiaAvVw6pV7XY6jE2Th';
    if (nftNumber < 20000) return 'QmNd1bbRp7cwDa924Dno2FcL27GhvNmgxHYmoWpuTz6Ywq';
    if (nftNumber < 30000) return 'QmS5wtneJfBZX4d38gZ5uLijNgsD6GtQMzGdnZ57TJJsh7';
    if (nftNumber < 40000) return 'QmcNyPYSjdxaaM5ABkDRtYHrxV2HdjJ9Q9FtSd2A8JVuEq';
    if (nftNumber < 50000) return 'QmPQxaMq7bipHTSxBjWPD2EHMEQzGC5rWBb2SkWLHnYpLF';
    return 'QmWDNKJeoBESijrc9BHYDZ4G48m8Go5U4SNLm2vCuTK6yo';
}

const handleTokenUris = () => {
    const LIMIT = 9;
    let nftNumber = 1;
    let id = 1;

    for (let a = 0; a < LIMIT; a++) {
        for (let b = 0; b < LIMIT; b++) {
            for (let c = 0; c < LIMIT; c++) {
                for (let d = 0; d < LIMIT; d++) {
                    for (let e = 0; e < LIMIT; e++) {
                        
                        const obj = {
                            'name': 'Sinergy Bronze',
                            'description': 'Ésta moneda representa una semilla de infinita abundancia. Con ella se puede crear un árbol de prosperidad. Aumentar ahorros para cumplir propósitos. Recibir numerosas recompensas pasivas y educación en criptofinanzas.',
                            'image': `ipfs://${getCID(nftNumber)}/HEAD_${id}.png`,
                            'attributes': []
                        }

                        console.log("Escribiendo: ", obj);
                        fs.writeFileSync(`./uris/${a}-${b}-${c}-${d}-${e}.json`, JSON.stringify([obj]));

                        nftNumber++;
                        id++;

                        if (id > 10000) id = 1;
                    }
                }
            }
        }
    }
}

handleTokenUris();