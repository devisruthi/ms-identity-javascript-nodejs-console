// Import the required modules
const assert = require('assert');
const { Given, When, Then } = require('cucumber');
require('dotenv').config();
const fetch = require('../fetch');
const auth = require('../auth');


// Define a variable to store the response
let apiResponse = null;

// Define a step to make a GET request to the API
Given('I make a GET request to the {string}', async function (resource) {
  // Make the request and store the response
  const authResponse = await auth.getToken(auth.tokenRequest);  
  const users = await fetch.callApi(auth.apiConfig.uri, authResponse.accessToken);
  apiResponse = users;
  // console.log(users);
});

// Define a step to verify the status code of the response
Then('the response status code should be {int}', function (statusCode, callback) {
  // Assert that the status code is equal to the expected value
  assert.equal(apiResponse.status, statusCode);
  callback();
});

// Define a step to verify the type of the facts in the response
Then('the {string} should be {string}', function (property, value, callback) {
  // Parse the response body as JSON
  console.log(apiResponse.data.value[0][property])
  assert.strictEqual(apiResponse.data.value[0][property], value);

  callback();
});
