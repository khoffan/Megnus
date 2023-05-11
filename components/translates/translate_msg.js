const request = require('request');


const tranapi = (msg,code,callback) => {
    const options = {
      method: 'POST',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'ae41b5ea99msh1ecd12bfa2aefeap16b035jsn3d6134450248',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      form: {
        source_language: 'th',
        target_language: code,
        text: msg
      }
    };
    
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        const tranBody = JSON.parse(body)
        const tranTxt = tranBody.data.translatedText
        callback(tranTxt);
    });
};

module.exports = { tranapi }
