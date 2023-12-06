const path = require('path');
const KeyforgeApiToKeytekiConverter = require('../src/KeyforgeApiToKeytekiConverter');

let converter = new KeyforgeApiToKeytekiConverter();

const Languages = ['en', 'de', 'es', 'fr', 'it', 'pl', 'pt', 'th', 'vi', 'zhhans', 'zhhant'];

const doImport = async () => {
    if (process.argv[4] === 'all') {
        for (const language of Languages) {
            await converter.convert({
                pathToPackFile: path.join(process.cwd(), process.argv[2]),
                cyclePrefix: process.argv[3],
                language: language
            });
        }
    } else {
        await converter.convert({
            pathToPackFile: path.join(process.cwd(), process.argv[2]),
            cyclePrefix: process.argv[3],
            language: process.argv.length > 4 ? process.argv[4] : 'en'
        });
    }
};

doImport()
    .then(() => console.info('complete!'))
    .catch((err) => console.info(err));
