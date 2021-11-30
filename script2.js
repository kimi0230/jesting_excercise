// Now a little bit more realistic:
// const fetch = require("node-fetch");
const axios = require("axios");

const getPeople = async (axios) => {
  const getRequest = await axios("http://swapi.py4e.com/api/people");
  const data = getRequest.data;
  return {
    count: data.count,
    results: data.results,
  };
};

const getPeoplePromise = (axios) => {
  return axios("http://swapi.py4e.com/api/people")
    .then(function (response) {
      return {
        count: response.data.count,
        results: response.data.results,
      };
    })
    .catch(function (error) {
      console.log(error);
    });
};

// getPeople();
// getPeoplePromise();

module.exports = {
  getPeople,
  getPeoplePromise,
};
