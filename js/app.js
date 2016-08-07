'use strict';

var express = require('express');
var home = require('../package.json');


var Twitter = require('twitter-js-client').Twitter;

//Callback functions
 var error = function (err, response, body) {
   console.log('ERROR [%s]', err);
 };
 var success = function (data) {
   console.log('Data [%s]', data);
 };

 var Twitter = require('twitter-js-client').Twitter;

 //Get this data from your twitter apps dashboard
 var config = {
   "consumerKey": "A5gjDlUBESwGjYHH1OECUipvt",
   "consumerSecret": "74yqUij5tUwXoGFpiMjsuHp6zV2194IItaMA07mvtCK4cUaqdJ",
   "accessToken": "90070467-4mfMhgoB8Nb4HPyzso4au1G2ilFpoLCvRhEk5ovAZ",
   "accessTokenSecret": "bL3Pj9aRltlSkwPwbrFQVez4rQgTfZb0rHZ0KB7pgBN2C",
   "callBackUrl": ""
 }

 var twitter = new Twitter(config);

 //Example calls

 // twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10'}, error, success);

 //
 // twitter.getHomeTimeline({ count: '10'}, error, success);
 //
 //  twitter.getReTweetsOfMe({ count: '10'}, error, success);
 //
 // twitter.getTweet({ id: '1111111111'}, error, success);


 //
 // Get 10 tweets containing the hashtag haiku
 //

 // twitter.getSearch({'q':'#haiku','count': 10}, error, success);

 //
 // Get 10 popular tweets with a positive attitude about a movie that is not scary
 //

// twitter.getSearch({'q':' movie -scary :) since:2013-12-27', 'count': 10, 'result\_type':'popular'}, error, success);


var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

app.get('/', function(req, res) {
  var testMessage = twitter.getMentionsTimeline({ count: '1'}, error, success);
  res.render('index');
});

app.listen(3000, function(){
  console.log("this frontend thing is running!");
});
