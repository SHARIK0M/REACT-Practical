fetch('https://api.example.com/data')
  .then(res => res.json())        // convert response to JSON
  .then(data => console.log(data))
  .catch(error => console.error(error));


//   npm install axios

import axios from 'axios';

axios.get('https://api.example.com/data')
  .then(res => {
    console.log(res.data); // direct access to data
  })
  .catch(error => {
    console.error(error);
  }); 

// --------------------------------------------------------------------------------

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com'
});

export default api;

import api from './api';

api.get('/data')
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
