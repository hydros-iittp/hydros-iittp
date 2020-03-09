var DATE = new Date()
var date1 = DATE.getDate()
var month1 = DATE.getMonth() + 1
var year1 = DATE.getFullYear()
var prev = DATE
prev.setDate(DATE.getDate() - 1)
var date2 = prev.getDate()
var month2 = prev.getMonth() + 1
var year2 = prev.getFullYear()
var today1 = year1+"-"+month1+"-"+date1
var today2 = year2+"-"+month2+"-"+date2
console.log(today1)
console.log(today2)
var count = 0
var query = ['climate-change','water-resources','Groundwater']
const NewsAPI = require('newsapi')
const newsapi = new NewsAPI('c62e6d455d1d446db915a0e311ba787e')
newsapi.v2.everything({
    catergory:['technology','science'],
    q:['climate-change','water-resources','Groundwater'],
    language: 'en',
    sortBy:'relevancy',
    from:today1,
    to:today2,
    domains:'weather.com',

}).then(response => {
    console.log(response)   
  });
