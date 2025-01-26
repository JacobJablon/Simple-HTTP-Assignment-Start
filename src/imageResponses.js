const fs = require('fs'); // pull in the file system module

const dankMemes = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getDankMemes = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(dankMemes);
  response.end();
};

module.exports.getDankMemes = getDankMemes;
