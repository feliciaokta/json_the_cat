// const request = require("request"); // fetch Siberian data from API endpoint
// const breed = process.argv.slice(2)[0];
// const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;


// // https://github.com/request/request#readme
// // read section "Super simple to use"

// request(URL, function (error, response, body) {
//   if (error) {
//     return console.log(error);
//   }
//   if (response === []) {
//     return console.log("Breed not found");
//   }
//   if (response) {
//     const data = JSON.parse(body);
//     console.log(data[0]["description"]);
//   }
// });

const request = require("request"); // fetch Siberian data from API endpoint

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, function (error, response, body) {
    if (error) {
      callback(error, null);
    } else if (response) {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }
  })
};

// breedName = tabbycat
// fetchBreedDescription(tabbycat, callback)
// callback (data) => {console.log(data of tabbycat)}

module.exports = { fetchBreedDescription };