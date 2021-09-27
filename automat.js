// commend: node automat.js name=juice size=30
// result:
"I prepare suice of 30ml"

// commend: node automat.js name=coffe size=50
// result:
"I prepare coffee of 50ml"

const options = {};
const arg = process.argv.splice(2).forEach(x => {
  const parts = x.split('=');
  options[parts[0]] = parts[1];
});


function makeDrink(name, size) {
  let drink;
  switch (name) {
    case 'juice': drink = 'Juice'; break;
    case 'coffe': drink = 'Coffee'; break;
    default: throw new Error('There is no-drink')
  }
  
  const text = `I prepare ${drink} of ${size}ml`;
  console.log(text);
}

makeDrink(options.name, options.size)
