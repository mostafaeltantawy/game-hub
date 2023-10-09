import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '3c492c6c6f0b4bf9b565ad21830e95a9',
  },
});
