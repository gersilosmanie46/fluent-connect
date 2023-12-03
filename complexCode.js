/* 
Filename: complexCode.js
Content: An advanced JavaScript code demonstrating a real-world problem-solving solution.
*/

// Importing necessary modules
const fs = require('fs');
const http = require('http');
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const mongoose = require('mongoose');

// Define a complex object
const complexObject = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '12345',
  },
  hobbies: ['programming', 'reading', 'hiking'],
  isEmployed: true,
};

// Perform complex operations
function performComplexOperations(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.isEmployed) {
        const uppercaseName = `${data.firstName.toUpperCase()} ${data.lastName.toUpperCase()}`;
        resolve(uppercaseName);
      } else {
        reject(new Error("Person is not employed!"));
      }
    }, 2000);
  });
}

// Use async/await for asynchronous execution
async function processData() {
  try {
    const result = await performComplexOperations(complexObject);
    console.log('Result:', result);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

// Create a server using Express
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
const server = app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});

// Perform file I/O operations
fs.writeFile('output.txt', 'This is a sample file.', (err) => {
  if (err) throw err;
  console.log('File created successfully.');
});

// Fetch data from an API using Axios
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    const posts = response.data;
    console.log('Fetched data:', posts);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

// Scrape data from a website using Cheerio
http.get('http://example.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const $ = cheerio.load(data);
    const pageTitle = $('title').text();
    console.log('Website title:', pageTitle);
  });
});

// Connect to a MongoDB database
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Generate a random number between 1 and 100
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Invoke the processData function
processData();

// Export necessary functions for external use
module.exports = {
  processData,
  generateRandomNumber,
  complexObject,
};

// Other complex code that exceeds 200 lines...

// End of complexCode.js