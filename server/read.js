const fs = require('fs');
const path = require('path');

const sortFolders = (folders) => {
    const orderedFolders = {};
    const returnResult = [];

    folders.forEach(folder => {
        const name = folder.name;
        const [leadNumber] = name.split('.');
        
        if (leadNumber in orderedFolders) {
            orderedFolders[leadNumber].push(folder);
        } else {
            orderedFolders[leadNumber] = [folder];
        }
    });

    for (const folders of Object.values(orderedFolders)) {
        folders.sort((a, b) => {
            if (Number(a.name.split('.')[1]) < Number(b.name.split('.')[1])) {
                return -1;
            } 
            if (Number(a.name.split('.')[1]) > Number(b.name.split('.')[1])) {
                return 1;
            }

            return 0;
        }).forEach(folder => {
            returnResult.push(folder);
        });
    }

    return returnResult;
};

function readJsonFiles(targetDirName) {

    const targetDirPath = path.resolve(process.cwd(), targetDirName);

    try {
        const directoryItems = fs.readdirSync(targetDirPath);
        
        let resultArray = [];

        for (let item of directoryItems) {
            const fullItemPath = path.join(targetDirPath, item);
            
            if (fs.statSync(fullItemPath).isDirectory()) {
                try {

                    const filesInSubfolder = fs.readdirSync(fullItemPath);
                    
                    const jsonFiles = filesInSubfolder.filter(file => file.endsWith('.json'));
                    
                    resultArray.push({
                        name: item,
                        children: new Array(jsonFiles.length).fill(0).map((zero, index) => String(zero + index + 1))
                    });
                } catch (err) {
                    console.error(`Ошибка чтения подпапки "${item}"`, err.message);
                }
            }
        }

        return sortFolders(resultArray);
    } catch (err) {
        console.error(`Ошибка при чтении папки "${targetDirName}":`, err.message);
        throw new Error(err.message);
    }
}

module.exports = readJsonFiles;