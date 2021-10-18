const express = require('express');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello')
});

app.get('/firmy/:name', (req, res) => {
  const { name } = req.params;
  const companies = [
    { slug: 'berisz', name: 'pages new item' },
    { slug: 'brukBetmode', name: 'Bruk Bet Mode' },
  ];

  const company = companies.find(x => x.slug === name);
  if (company) {
    res.send(`company name ${company?.name}`)
  } else {
    res.send(`There's no company with this name`)
  }
  
});

app.listen(port);