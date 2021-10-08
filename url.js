const express = require('express');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello express')
});

app.get('/firmy/:name', (req, res) => {
  const { name } = req.params;
  const companies = [
    { slug: 'javorskyp', name: 'TJP' },
    { slug: 'brukmode', name: 'ModeNode' },
  ];

  const company = companies.find(x => x.slug === name);
  if (company) {
    res.send(`Name ${company?.name}`)
  } else {
    res.send(`No company`)
  }
  
});

app.listen(port);
