const axios = require('axios');
const key = process.env.secret


module.exports = {
    
    list: (req,res) => {
        let search = req.query.q;
        console.log(search);
        let url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${key}`
        axios.get(url)
    .then(response => {

        res.render('news',{
            title:'news',
            articles:response.data.articles
        })

    })
    .catch(error => {
        console.error(error);
    });
        

    },

}