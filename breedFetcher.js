const request = require("request"); // fetch Siberian data from API endpoint
const breed = process.argv.slice(2)[0];
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(URL, function (error, response, body) {
  if (error) {
    return console.log(error);
  }
  if (response === []) {
    return console.log("Breed not found");
  }
  if (response) {
    const data = JSON.parse(body);
    console.log(data[0]["description"]);
  }
})
