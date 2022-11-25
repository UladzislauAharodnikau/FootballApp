import axios from 'axios';

const API_KEY = 'd1a3ecbd2719820a8b20fe887713cfb1';

const instance = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
  headers: {
    'x-apisports-key': API_KEY,
  },
});

export default instance;
