const http = require('http');
const port = 3000;

const requestListener = function (req, res) {
  console.log(req.url);

  // Buffer, stream, binar-code 

  const chunks = [];
  req.on('data', (chunk) => {
    chunks.push(chunk);
  }).on('end', () => {
    const body = Buffer.concat(chunks).toString();
    console.log(body);
  });

  res.write('<h1>Home</h1>');
  return res.end()
};

const server = http.createServer(requestListener);

server.listen(port, () => {
  console.log(`Serwer słucha na http://localhost:${port}`);
});
