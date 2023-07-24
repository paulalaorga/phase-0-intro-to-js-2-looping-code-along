
const names = ["Charlie", "Samip", "Ali"];

function writeCards(names) {
    const ThankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        ThankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }

    return ThankYouMessages;
}

const messages = writeCards(names);
console.log(messages);

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}