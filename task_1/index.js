import {encoded, translations} from './data.js'
function decryptFields(encoded, translations) {
    let decryptedList = [];

    encoded.forEach(item => {
        let decryptedItem = {};
        for (let key in item) {
            if (key.endsWith("Id") && translations[item[key]] !== undefined) {
                decryptedItem[key] = translations[item[key]];
            } else if (!['groupId', 'service', 'formatSize', 'ca'].includes(key)) {
                decryptedItem[key] = item[key];
            } else {
                decryptedItem[key] = item[key];
            }
        }
        decryptedList.push(decryptedItem);
    });

    return decryptedList;
}



console.log(decryptFields(encoded, translations));

/*

 console.log("Let's rock")
console.log(encoded, translations)
*/