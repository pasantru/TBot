console.log('The bot is starting!');
var Twit = require('twit');
var Config = require('./config');
//No repeted tweets
var tweets = ['.La #HackersWeek no es lo mismo sin ti @SoyGema',
'.Para cuando vienes a Malaga a dar una charla en la #ETSIInformatica @SoyGema ?',
'.Donde podemos ir a ver tus charlas @SoyGema ?',
'.Juegas al Maincra @Quintero46 @Meind0201 @aruizdlt @Aliene_Guzh @RachelPinkLiz @Pasantru ?',
'.Un Fortnite @Quintero46 @Meind0201 @aruizdlt @DazRoldn @Pasantru ?'];
var tweet_num = 0;
var T = new Twit(Config);

tweetIt();
setInterval(tweetIt, 1000*60*5);
// likeIt();
// searchIt();
// tweetIt(); 
// singleTweet();
function searchIt(){
    T.get('search/tweets', { q: '@Quintero46', count: 1 }, function(err, data, response) {
        var tweets = data.statuses;
        for(var i = 0; i < tweets.length; i++){
            console.log('Tweet ' + i + ':\n');
            console.log(data);
            console.log('\n');
            // console.log(tweets[i].created_at + ',\n' + tweets[i].id + ',\n' + tweets[i].text + ',\n' + tweets[i].);
        }
        
      });
}
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
function singleTweet(){
    T.post('statuses/update', {status: tweets[3]}, function(err,data,response){
        if(err){
            console.log('We fucked up!');
        }else{
            // console.log(data);
        }
        
    });
}
