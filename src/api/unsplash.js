import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com' ,
  headers: {
    Authorization: 'Client-ID 58efbb6ba848923e35431f889b82914702afde6dc4bab980a7a3335aa43918c3'
  } 
})