//Liri takes the following arguments
// * my-tweets
// * spotify-this-song
// * movie-this
// * do-what-it-says

//these add other programs to this one
require("dotenv").config();
var dataKeys = require("./keys.js");
const fs = require('fs'); //file system\\
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var spotify = new Spotify(dataKeys.spotify);
var client = new Twitter(dataKeys.twitter);

var writeToLog = function(data) {
  fs.appendFile("log.txt", '\r\n\r\n');

  fs.appendFile("log.txt", JSON.stringify(data), function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("log.txt was updated!");
  });
}

//Creates a function for finding artist name from spotify
var getArtistNames = function(artist) {
  return artist.name;
};

//Function for finding songs on Spotify
var getMeSpotify = function(songName) {
  //If it doesn't find a song, find Ace of Base "The Sign"
  if (songName === undefined) {
    songName = 'The Sign';
    artistName = 'Ace of Base';
    albumName = 'The Sign';
    console.log("Artist: "+artistName);
    console.log("Song: "+songName );
  };

  spotify.search({ type: 'track', query: songName }, function(err, data) {
    if (err) {
      console.log('Error occurred: ' + err);
      return;
    }

    var songs = data.tracks.items;
    var data = []; //empty array to hold data

    for (var i = 0; i < songs.length; i++) {
      data.push({
        'artist(s)': songs[i].artists.map(getArtistNames),
        'song name: ': songs[i].name,
        'preview song: ': songs[i].preview_url,
        'album: ': songs[i].album.name,
      });
    }
    console.log(data);
    writeToLog(data);
  });
};


var getTweets = function() {

        
        var user;
        client.get('account/settings', function (err,response) {
            user = response.screen_name;
        });
        
        	
        console.log('These are your last 20 tweets:');
        client.get('statuses/user_timeline', {screen_name:user,count:20}, function (error, tweets, response) {
            if (error) {console.log(error)}
            for (i in tweets) {
                console.log(tweets[i].created_at+'\n'+tweets[i].text);
            }
        });
};

var getMeMovie = function(movieName) {

  if (movieName === undefined) {
    movieName = 'Mr Nobody';
  }

  var url ="http://www.omdbapi.com/?apikey=trilogy"
	//If user doesn't give valid name, use Mr. Nobody
	process.argv[3] ? url += '&t='+process.argv[3] : url += '&t=Mr. Nobody';
	url += '&type=movie';
	request(url, function (err,resp,body) {
		//Used for development
		//fs.writeFile('omdb.txt',body,'utf-8');
		body = JSON.parse(body);
		console.log('Title: '+body.Title);
		console.log('Year: '+body.Year);
		console.log('IMDB Rating: '+body.Ratings[0].Value);
		console.log('Rotten Tomatoes Rating: '+body.Ratings[1].Value);
		console.log('Countries Produced: '+body.Country);
		console.log('Languages: '+body.Language);
		console.log(body.Plot);
		console.log('Actors: '+body.Actors);
	});
}



var doWhatItSays = function() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    console.log(data);
    writeToLog(data);
    var dataArr = data.split(',')

    if (dataArr.length == 2) {
      pick(dataArr[0], dataArr[1]);
    } else if (dataArr.length == 1) {
      pick(dataArr[0]);
    }

  });
}

var pick = function(caseData, functionData) {
  switch (caseData) {
    case 'my-tweets':
        console.log('calling getTweets()')
      getTweets();
      break;
    case 'spotify-this-song':
      getMeSpotify(functionData);
      break;
    case 'movie-this':
      getMeMovie(functionData);
      break;
    case 'do-what-it-says':
      doWhatItSays();
      break;
    default:
      console.log('LIRI doesn\'t know that');
  }
}

//run this on load of js file
var runThis = function(argOne, argTwo) {
  pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);