//нужно написать что-нибудь в файл перед началом!
const fs = require('fs');

function reverseString(str) {
    return str.split('').reverse().join('');
}

const filePath = 'C:/Users/User/Desktop/NodeJS/4. NodeJS/test.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка чтения файла:', err);
        return;
    }

    const reversedData = reverseString(data);

    fs.writeFile(filePath, reversedData, 'utf8', (err) => {
        if (err) {
            console.error('Ошибка записи в файл:', err);
            return;
        }
        console.log('Файл успешно перевернут и записан обратно.');
    });
});

