const request = require('request');


const tranapi_code = (lang,callback) => {
    const options = {
      method: 'GET',
      url: 'https://text-translator2.p.rapidapi.com/getLanguages',
      headers: {
        'X-RapidAPI-Key': 'ae41b5ea99msh1ecd12bfa2aefeap16b035jsn3d6134450248',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      }
    };
    
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        const resBody = JSON.parse(body)
        let i=0;
        while(i < resBody.data.languages.length){
            const res = resBody.data.languages[i].name
            if(lang.toLowerCase() == res.toLowerCase()){
                const codel = resBody.data.languages[i].code               
                callback(codel)
                break;
            }
            i++
        }
    });
}


module.exports = { tranapi_code }
// tranapi_code('english')
