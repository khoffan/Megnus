const request = require('request');


const aiChatgpt = (event, callback) => {
  const text = event;
  // console.log(text);
  const options = {
    method: 'POST',
    url: 'https://openai80.p.rapidapi.com/chat/completions',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'ae41b5ea99msh1ecd12bfa2aefeap16b035jsn3d6134450248',
      'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
    },
    body: JSON.stringify({ "model": "gpt-3.5-turbo", "messages": [{ "role": "user", "content": text }] })
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    const responseData = JSON.parse(body);
    const aimsg = responseData.choices[0].message.content;
    callback(aimsg)
    // console.log(aimsg);
  });
};

module.exports = { aiChatgpt }