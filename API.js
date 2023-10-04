import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import axios from 'axios'

const getUsers = () => {
  axios.get('https://realtor.p.rapidapi.com/locations/v2/auto-complete')
  .then(response => {
   const users = response.data.data;
   console.log(`GET users`, users);
 })
  .catch(error => console.error(error));
 };
 getUsers();

setupCounter(document.querySelector('#counter'))
