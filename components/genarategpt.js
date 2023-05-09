const dotenv = require('dotenv')
dotenv.config({path:'../.env'})

const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://openai80.p.rapidapi.com/chat/completions',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'ae41b5ea99msh1ecd12bfa2aefeap16b035jsn3d6134450248',
    'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
  },
  data: {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: 'Hello!'
      }
    ]
  }
};

async function fetchData() {
  try {
    const response = await axios.request(options);
    console.log(response.data.choice[0].messages.content);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

  