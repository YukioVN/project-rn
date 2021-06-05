import axios from 'axios';
const BASE_API = 'http://localhost:3333/';

axios.post(`${BASE_API}/signup`, {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});