console.log('The bot is starting!');

//Imports
var Twit = require('twit');
var Config = require('./config');




/*  No repeted tweets must include a variable that is unique in each tweet in order 
    for it to function properly */
var tweets = ['.Juegas al Maincra @Quintero46 @Meind0201 @aruizdlt @Aliene_Guzh @RachelPinkLiz @Pasantru ?',
'.Un Fortnite @Quintero46 @Meind0201 @aruizdlt @DazRoldn @Pasantru ?'];

var tweet_num = 0;



/*  The Config file is a js that contains the keys for twitter that must be specified 
    in order to tweet with a specific account. (These are found in apps.twitter.com) */
var T = new Twit(Config);


//Commands to test the program
tweetIt();
setInterval(tweetIt, 1000*60*5);
/*  These are all the commands available for the app:
    likeIt();
    searchIt();
    tweetIt(); 
    singleTweet(); */




/*  searchIt: Looks for a specified number of tweets containing a "q" element that selects tweets */ 
function searchIt(){
    T.get('search/tweets', { q: '@Quintero46', count: 1 }, function(err, data, response) {
        var tweets = data.statuses;
        for(var i = 0; i < tweets.length; i++){
            console.log(tweets[i].created_at + ',\n' + tweets[i].id + ',\n' + tweets[i].text + ',\n');
        }
        
      });
}



/*  Tweets the full array of messages it must be executed with setInterval(tweetIt, time) 
    The parameter time must be greater than or equal to 5 minutes as the twitter pi allows 
    only for a limited number of tweets per minute time will be set to 1000*60*5 */
function tweetIt(){
    if(tweet_num>=5) tweet_num=0;
    console.log('Tweeted that shit bruh! Num: ' + tweet_num);
    T.post('statuses/update', {status: tweets[tweet_num]}, function(err,data,response){
        if(err){
            console.log('We fucked up!');
        }else{
            // console.log(data);
        }
        
    });
    tweet_num++;
}



/*  Likes a tweet must have @param the id of the tweet
    TODO fix the id that it does not recognize the formatthat the json provides */
function likeIt(){
    var id_tweet;
    T.get('search/tweets', { q: '@Quintero46', count: 1 }, function(err, data, response) {
        var tweets = data.statuses;
        id_tweet = tweets[0].id.toString();
        console.log(id_tweet);
      });
    T.post('favorites/create', { id:  id_tweet}, function (err, data, response) {
        console.log(data);
      });
}



/*  Tweets a single message to twitter that is selected usign the array tweets or by 
    replacing tweets[*] by a string delimited by single quotation marks */
function singleTweet(){
    T.post('statuses/update', {status: tweets[3]}, function(err,data,response){
        if(err){
            console.log('We fucked up!');
        }else{
            console.log(data);
        }
        
    });
}
