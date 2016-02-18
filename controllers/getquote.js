'use strict';

const $http = require('http');

//const GetQuote = require('../models/getquote');

/*module.exports.index = (req, res) => {
  res.render('getquote');
};*/

module.exports.index = (req, res) => {

  const stock = req.params.stock;
  console.log(stock);

  //request.get(url, (err, response, data) => {
  	//const newData = JSON.parse(data)
  //})

  $http.request('http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=' + stock, response => {

  	let str = '';
  	let result;

  	response.on('data', chunk => {
  		str += chunk;
  	});

  	response.on('end', () => {
  		result = JSON.parse(str);

  		res.render('singlestock', {
  			indivStock: stock,
  			companyname: result["Name"],
  			lastprice: result["LastPrice"],
  			todaysopen: result["Open"],
  			todayshigh: result["High"],
  			todayslow: result["Low"]
  		});
  	});

  }).end();
};
