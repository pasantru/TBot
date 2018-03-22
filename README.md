Twitter Bot
===================
----------


### Table of contents


[TOC]

Starting the bot
-------------

First of all  download [**NodeJS**][1]


#### <i class="icon-file"></i> Get the twitter keys

After cloning the project enter the **config.js** file which will store your twitter keys to post and access twitter.
 
> **Note:**

> - Enter the following [link][2] and create a **new app** fill in the form
> - Then enter the **Keys and Access Tokens** tab and generate **Token Actions**
> - Fill in the file with the keys

```module.exports = {
    consumer_key:         '..',
    consumer_secret:      '..',
    access_token:         '..',
    access_token_secret:  '..',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all   requests. 
}
```

#### <i class="icon-folder-open"></i> Change the some code for the program
Change this: 
```
var Config = require('../config.js'); 
```
with this:
```
var Config = require('./config.js');
```


  [1]: https://nodejs.org/en/
  [2]: https://apps.twitter.com/
