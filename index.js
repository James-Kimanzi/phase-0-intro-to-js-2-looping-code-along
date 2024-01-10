const names = ['Guadalupe', 'Ollie', 'Aki'];
let eventName;

function writeCards(names, eventName) {

let outputMessages = [];

  for (let i = 0; i < names.length; i++) {

    let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`

    outputMessages.push(message);
  }
  return outputMessages;
}


console.log(writeCards(names, 'surprise'));

function countDown(positiveInt) {
while (positiveInt >= 0 ) {
  console.log(positiveInt);
  positiveInt--;
  }
}

console.log(countDown(10));


