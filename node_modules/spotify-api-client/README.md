# spotify-client

[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)](https://travis-ci.org/DakotaLMartinez/spotify-client)
[![Codecov](https://img.shields.io/codecov/c/github/codecov/example-python.svg)](https://codecov.io/gh/DakotaLMartinez/spotify-client)
[![npm (scoped)](https://img.shields.io/npm/v/@cycle/core.svg)](https://www.npmjs.com/package/spotify-api-client)

## Installation 

```
npm install --save spotify-api-client
```

## Usage 

The spotify API client adds the following methods you can utilize:

* [findArtist(query [, options])](#findartistquery--options)
* [findAlbum(query [, options])](#findalbumquery--options)
* [findTrack(query [, options])](#findtrackquery--options)
* [getTracks(artistId [, country])](#gettracksartistid--country)

Please consult the [Spotify Web API docs](https://developer.spotify.com/web-api/search-item/) for further reference on what data you can expect in response to calling the following methods.

### findArtist(query [, options])
```js
import Spotify from 'spotify-api-client';

Spotify.findArtist('The Beatles') 
// returns promise containing Spotify API response 
// to a GET request to the following URL:
// 'https://api.spotify.com/v1/search?q=The%20Beatles&type=artist&limit=1&offset=0'
```

The response looks like this: 
```json
{
  "artists" : {
    "href" : "https://api.spotify.com/v1/search?query=The+Beatles&type=artist&offset=0&limit=1",
    "items" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
      },
      "followers" : {
        "href" : null,
        "total" : 3237488
      },
      "genres" : [ "british invasion", "classic rock", "merseybeat", "protopunk", "psychedelic rock", "rock" ],
      "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
      "id" : "3WrFJ7ztbogyGnTHbHJFl2",
      "images" : [ {
        "height" : 1000,
        "url" : "https://i.scdn.co/image/934c57df9fbdbbaa5e93b55994a4cb9571fd2085",
        "width" : 1000
      }, {
        "height" : 640,
        "url" : "https://i.scdn.co/image/5f70d98d3e4616a02a3afe2aa9a840b9157b92a1",
        "width" : 640
      }, {
        "height" : 200,
        "url" : "https://i.scdn.co/image/7fe1a693adc52e274962f1c61d76ca9ccc62c191",
        "width" : 200
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/857b1ce5b1b372b873b0a8bdb3ff8023b6c61d39",
        "width" : 64
      } ],
      "name" : "The Beatles",
      "popularity" : 84,
      "type" : "artist",
      "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
    } ],
    "limit" : 1,
    "next" : "https://api.spotify.com/v1/search?query=The+Beatles&type=artist&offset=1&limit=1",
    "offset" : 0,
    "previous" : null,
    "total" : 37
  }
}
```

The default options for the `findArtist` request are `limit=1` and `offset=0`. This means that the `findArtist` function will return the top match to a certain query for an artist by default. If you would like to override either of these defaults, you can pass an options object as a second parameter, specifying the `limit` or `offset` you would prefer, like so:

```js
Spotify.findArtist('The Beatles', {limit: 4, offset: 1})
// returns promise containing Spotify API response to 
// a GET request to the following URL:
// 'https://api.spotify.com/v1/search?q=The%20Beatles&type=artist&limit=4&offset=1'
```

The response looks similar, except the `items` array on the response object will now have 4 objects in it, corresponding to the top 2-5 Artist matches for `'The Beatles'` query.

### findAlbum(query [, options])

```js
import Spotify from 'spotify-api-client';

Spotify.findAlbum('Abbey Road')
// returns promise containing Spotify API response
// to a GET request to the following URL:
// 'https://api.spotify.com/v1/search?q=Abbey%20Road&type=album&limit=1&offset=0'
```

The response looks like this: 

```json
{
  "albums" : {
    "href" : "https://api.spotify.com/v1/search?query=Abbey+Road&type=album&offset=0&limit=1",
    "items" : [ {
      "album_type" : "album",
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
        },
        "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
        "id" : "3WrFJ7ztbogyGnTHbHJFl2",
        "name" : "The Beatles",
        "type" : "artist",
        "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN"
      },
      "href" : "https://api.spotify.com/v1/albums/0ETFjACtuP2ADo6LFhL6HN",
      "id" : "0ETFjACtuP2ADo6LFhL6HN",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/c429243cd056974175abe72a3142d3dccffc166a",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/31327f9fe6b6e0bd6e431a4add681397e95c6329",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/15fed5371098fbf631193332164fba1d0e08c878",
        "width" : 64
      } ],
      "name" : "Abbey Road (Remastered)",
      "type" : "album",
      "uri" : "spotify:album:0ETFjACtuP2ADo6LFhL6HN"
    } ],
    "limit" : 1,
    "next" : "https://api.spotify.com/v1/search?query=Abbey+Road&type=album&offset=1&limit=1",
    "offset" : 0,
    "previous" : null,
    "total" : 110
  }
}
```

Again, if you'd like to override the default values for `limit` and `offset`, you can pass an `options` object as a second argument like so:

```js
Spotify.findAlbum('Abbey Road', {limit: 6, offset: 3})
// returns promise containing Spotify API response
// to a GET request to the following URL:
// 'https://api.spotify.com/v1/search?q=Abbey%20Road&type=album&limit=6&offset=3'
```

As before, your response will be adjusted accordingly.

### findTrack(query [, options])

```js
import Spotify from 'spotify-api-client';

Spotify.findTrack('Come Together')
// returns promise containing Spotify API response 
// to a GET request to the following URL:
// 'https://api.spotify.com/v1/search?q=Come%20Together&type=track&limit=1&offset=0'
```

The response looks like this: 
```json 
{
  "tracks" : {
    "href" : "https://api.spotify.com/v1/search?query=Come+Together&type=track&offset=0&limit=1",
    "items" : [ {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
          },
          "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
          "id" : "3WrFJ7ztbogyGnTHbHJFl2",
          "name" : "The Beatles",
          "type" : "artist",
          "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
        } ],
        "available_markets" : [ "CA", "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN"
        },
        "href" : "https://api.spotify.com/v1/albums/0ETFjACtuP2ADo6LFhL6HN",
        "id" : "0ETFjACtuP2ADo6LFhL6HN",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/c429243cd056974175abe72a3142d3dccffc166a",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/31327f9fe6b6e0bd6e431a4add681397e95c6329",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/15fed5371098fbf631193332164fba1d0e08c878",
          "width" : 64
        } ],
        "name" : "Abbey Road (Remastered)",
        "type" : "album",
        "uri" : "spotify:album:0ETFjACtuP2ADo6LFhL6HN"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
        },
        "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
        "id" : "3WrFJ7ztbogyGnTHbHJFl2",
        "name" : "The Beatles",
        "type" : "artist",
        "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "disc_number" : 1,
      "duration_ms" : 259946,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE0601690"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2EqlS6tkEnglzr7tkKAAYD"
      },
      "href" : "https://api.spotify.com/v1/tracks/2EqlS6tkEnglzr7tkKAAYD",
      "id" : "2EqlS6tkEnglzr7tkKAAYD",
      "name" : "Come Together - Remastered",
      "popularity" : 71,
      "preview_url" : "https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9?cid=null",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:2EqlS6tkEnglzr7tkKAAYD"
    } ],
    "limit" : 1,
    "next" : "https://api.spotify.com/v1/search?query=Come+Together&type=track&offset=1&limit=1",
    "offset" : 0,
    "previous" : null,
    "total" : 4227
  }
}
```

As with the previous methods, you can pass an optional `options` object to override the defaults for `limit` and `offset` like so:

```js
import Spotify from 'spotify-api-client';

Spotify.findTrack('Come Together', {limit: 10})
// returns promise containing Spotify API response 
// to a GET request to the following URL:
// 'https://api.spotify.com/v1/search?q=Come%20Together&type=track&limit=10&offset=0'
```

This can be useful if you're searching for a song that has covers by many different artists that have been released on many different albums (Like Come Together!).  

### getTracks(artistId [, country]) 

```js 
import Spotify from 'spotify-api-client';
 
Spotify.findArtist('The Beatles')
       .then((json) => {
         let beatlesId = json.artists.items[0].id;
         Spotify.getTracks(beatlesId)
                .then(console.log);
         // returns a promise containing Spotify API response 
         // to a GET request to the following URL: 
         // 'https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2/top-tracks?country=US'
       })

```

The response looks like this:

```json 
{
  "tracks" : [ {
    "album" : {
      "album_type" : "album",
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
        },
        "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
        "id" : "3WrFJ7ztbogyGnTHbHJFl2",
        "name" : "The Beatles",
        "type" : "artist",
        "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN"
      },
      "href" : "https://api.spotify.com/v1/albums/0ETFjACtuP2ADo6LFhL6HN",
      "id" : "0ETFjACtuP2ADo6LFhL6HN",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/c429243cd056974175abe72a3142d3dccffc166a",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/31327f9fe6b6e0bd6e431a4add681397e95c6329",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/15fed5371098fbf631193332164fba1d0e08c878",
        "width" : 64
      } ],
      "name" : "Abbey Road (Remastered)",
      "type" : "album",
      "uri" : "spotify:album:0ETFjACtuP2ADo6LFhL6HN"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
      },
      "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
      "id" : "3WrFJ7ztbogyGnTHbHJFl2",
      "name" : "The Beatles",
      "type" : "artist",
      "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
    } ],
    "available_markets" : [ "CA", "MX", "US" ],
    "disc_number" : 1,
    "duration_ms" : 185733,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "GBAYE0601696"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/6dGnYIeXmHdcikdzNNDMm2"
    },
    "href" : "https://api.spotify.com/v1/tracks/6dGnYIeXmHdcikdzNNDMm2",
    "id" : "6dGnYIeXmHdcikdzNNDMm2",
    "name" : "Here Comes The Sun - Remastered",
    "popularity" : 74,
    "preview_url" : "https://p.scdn.co/mp3-preview/6902e7da51d2f17e5369d57dadf8ce7d2a123f99?cid=null",
    "track_number" : 7,
    "type" : "track",
    "uri" : "spotify:track:6dGnYIeXmHdcikdzNNDMm2"
  }, {
    "album" : {
      "album_type" : "album",
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
        },
        "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
        "id" : "3WrFJ7ztbogyGnTHbHJFl2",
        "name" : "The Beatles",
        "type" : "artist",
        "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN"
      },
      "href" : "https://api.spotify.com/v1/albums/0ETFjACtuP2ADo6LFhL6HN",
      "id" : "0ETFjACtuP2ADo6LFhL6HN",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/c429243cd056974175abe72a3142d3dccffc166a",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/31327f9fe6b6e0bd6e431a4add681397e95c6329",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/15fed5371098fbf631193332164fba1d0e08c878",
        "width" : 64
      } ],
      "name" : "Abbey Road (Remastered)",
      "type" : "album",
      "uri" : "spotify:album:0ETFjACtuP2ADo6LFhL6HN"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
      },
      "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
      "id" : "3WrFJ7ztbogyGnTHbHJFl2",
      "name" : "The Beatles",
      "type" : "artist",
      "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
    } ],
    "available_markets" : [ "CA", "MX", "US" ],
    "disc_number" : 1,
    "duration_ms" : 259946,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "GBAYE0601690"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/2EqlS6tkEnglzr7tkKAAYD"
    },
    "href" : "https://api.spotify.com/v1/tracks/2EqlS6tkEnglzr7tkKAAYD",
    "id" : "2EqlS6tkEnglzr7tkKAAYD",
    "name" : "Come Together - Remastered",
    "popularity" : 71,
    "preview_url" : "https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9?cid=null",
    "track_number" : 1,
    "type" : "track",
    "uri" : "spotify:track:2EqlS6tkEnglzr7tkKAAYD"
  }, {
    "album" : {
      "album_type" : "album",
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
        },
        "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
        "id" : "3WrFJ7ztbogyGnTHbHJFl2",
        "name" : "The Beatles",
        "type" : "artist",
        "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/0jTGHV5xqHPvEcwL8f6YU5"
      },
      "href" : "https://api.spotify.com/v1/albums/0jTGHV5xqHPvEcwL8f6YU5",
      "id" : "0jTGHV5xqHPvEcwL8f6YU5",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/b3651a85f2bca826b38194c51d09cd7b068aa3ab",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/a329e45d52649d9ef327764a202df6084aff20ce",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/8cae03783213449b24f247244a3b2049e98ee6e1",
        "width" : 64
      } ],
      "name" : "Let It Be (Remastered)",
      "type" : "album",
      "uri" : "spotify:album:0jTGHV5xqHPvEcwL8f6YU5"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
      },
      "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
      "id" : "3WrFJ7ztbogyGnTHbHJFl2",
      "name" : "The Beatles",
      "type" : "artist",
      "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
    } ],
    "available_markets" : [ "CA", "MX", "US" ],
    "disc_number" : 1,
    "duration_ms" : 243026,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "GBAYE0601713"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/7iN1s7xHE4ifF5povM6A48"
    },
    "href" : "https://api.spotify.com/v1/tracks/7iN1s7xHE4ifF5povM6A48",
    "id" : "7iN1s7xHE4ifF5povM6A48",
    "name" : "Let It Be - Remastered",
    "popularity" : 69,
    "preview_url" : "https://p.scdn.co/mp3-preview/f7913ebb647d47835c34fa4db7e889c8a87c6d10?cid=null",
    "track_number" : 6,
    "type" : "track",
    "uri" : "spotify:track:7iN1s7xHE4ifF5povM6A48"
  }, {
    "album" : {
      "album_type" : "album",
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
        },
        "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
        "id" : "3WrFJ7ztbogyGnTHbHJFl2",
        "name" : "The Beatles",
        "type" : "artist",
        "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/7vEJAtP3KgKSpOHVgwm3Eh"
      },
      "href" : "https://api.spotify.com/v1/albums/7vEJAtP3KgKSpOHVgwm3Eh",
      "id" : "7vEJAtP3KgKSpOHVgwm3Eh",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/9ecfdf528562cae879748b73bd81b64dfa3d5704",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/58d9e881327df093da91b082ed89a4e2c4fec1a9",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/adda7302aab91f1a83cdca24878bad49384dae65",
        "width" : 64
      } ],
      "name" : "1 (Remastered)",
      "type" : "album",
      "uri" : "spotify:album:7vEJAtP3KgKSpOHVgwm3Eh"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
      },
      "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
      "id" : "3WrFJ7ztbogyGnTHbHJFl2",
      "name" : "The Beatles",
      "type" : "artist",
      "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
    } ],
    "available_markets" : [ "CA", "MX", "US" ],
    "disc_number" : 1,
    "duration_ms" : 425653,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "GBUM71505902"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/0aym2LBJBk9DAYuHHutrIl"
    },
    "href" : "https://api.spotify.com/v1/tracks/0aym2LBJBk9DAYuHHutrIl",
    "id" : "0aym2LBJBk9DAYuHHutrIl",
    "name" : "Hey Jude - Remastered 2015",
    "popularity" : 69,
    "preview_url" : "https://p.scdn.co/mp3-preview/c718fc992246a4b070500515880bed0b517631ab?cid=null",
    "track_number" : 21,
    "type" : "track",
    "uri" : "spotify:track:0aym2LBJBk9DAYuHHutrIl"
  }, {
    "album" : {
      "album_type" : "album",
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
        },
        "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
        "id" : "3WrFJ7ztbogyGnTHbHJFl2",
        "name" : "The Beatles",
        "type" : "artist",
        "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/3KzAvEXcqJKBF97HrXwlgf"
      },
      "href" : "https://api.spotify.com/v1/albums/3KzAvEXcqJKBF97HrXwlgf",
      "id" : "3KzAvEXcqJKBF97HrXwlgf",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/1e6c3774deb8c44852ac169e03ce3f7a37c936af",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/aec67ae3a374ecf851665ad5cadccc0ac42c0ae8",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/f038b690d8e3a98aea1397010b838e464f38fa79",
        "width" : 64
      } ],
      "name" : "Please Please Me (Remastered)",
      "type" : "album",
      "uri" : "spotify:album:3KzAvEXcqJKBF97HrXwlgf"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
      },
      "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
      "id" : "3WrFJ7ztbogyGnTHbHJFl2",
      "name" : "The Beatles",
      "type" : "artist",
      "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
    } ],
    "available_markets" : [ "CA", "MX", "US" ],
    "disc_number" : 1,
    "duration_ms" : 155226,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "GBAYE0601423"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/5ZBeML7Lf3FMEVviTyvi8l"
    },
    "href" : "https://api.spotify.com/v1/tracks/5ZBeML7Lf3FMEVviTyvi8l",
    "id" : "5ZBeML7Lf3FMEVviTyvi8l",
    "name" : "Twist And Shout - Remastered",
    "popularity" : 69,
    "preview_url" : "https://p.scdn.co/mp3-preview/b7e3bc96b46e4dcc22cec5d23337d2446cb0ab87?cid=null",
    "track_number" : 14,
    "type" : "track",
    "uri" : "spotify:track:5ZBeML7Lf3FMEVviTyvi8l"
  }, {
    "album" : {
      "album_type" : "album",
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
        },
        "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
        "id" : "3WrFJ7ztbogyGnTHbHJFl2",
        "name" : "The Beatles",
        "type" : "artist",
        "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/1klALx0u4AavZNEvC4LrTL"
      },
      "href" : "https://api.spotify.com/v1/albums/1klALx0u4AavZNEvC4LrTL",
      "id" : "1klALx0u4AavZNEvC4LrTL",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/2782d94528b449fb6910300cc8c8f93ab8cc7a8d",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/b6fe2afbd9fc1719d08765e693c9d91e5cafb38e",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/395d7bdb8713327f6ddce44740caee2b4739ff5f",
        "width" : 64
      } ],
      "name" : "The Beatles (Remastered)",
      "type" : "album",
      "uri" : "spotify:album:1klALx0u4AavZNEvC4LrTL"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
      },
      "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
      "id" : "3WrFJ7ztbogyGnTHbHJFl2",
      "name" : "The Beatles",
      "type" : "artist",
      "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
    } ],
    "available_markets" : [ "CA", "MX", "US" ],
    "disc_number" : 1,
    "duration_ms" : 138386,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "GBAYE0601654"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/5jgFfDIR6FR0gvlA56Nakr"
    },
    "href" : "https://api.spotify.com/v1/tracks/5jgFfDIR6FR0gvlA56Nakr",
    "id" : "5jgFfDIR6FR0gvlA56Nakr",
    "name" : "Blackbird - Remastered",
    "popularity" : 66,
    "preview_url" : "https://p.scdn.co/mp3-preview/9cd5790f74f29046953ef511c3737a1121785b73?cid=null",
    "track_number" : 11,
    "type" : "track",
    "uri" : "spotify:track:5jgFfDIR6FR0gvlA56Nakr"
  }, {
    "album" : {
      "album_type" : "album",
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
        },
        "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
        "id" : "3WrFJ7ztbogyGnTHbHJFl2",
        "name" : "The Beatles",
        "type" : "artist",
        "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/0PT5m6hwPRrpBwIHVnvbFX"
      },
      "href" : "https://api.spotify.com/v1/albums/0PT5m6hwPRrpBwIHVnvbFX",
      "id" : "0PT5m6hwPRrpBwIHVnvbFX",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/bbbd06069770d49731587d1f513bdf482c9420ab",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/9b7ac180a2f7a6209c9db2cb50c7e3cb04859115",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/8a2e78c8fba472319c3e0d1416f29302f2635458",
        "width" : 64
      } ],
      "name" : "Help! (Remastered)",
      "type" : "album",
      "uri" : "spotify:album:0PT5m6hwPRrpBwIHVnvbFX"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
      },
      "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
      "id" : "3WrFJ7ztbogyGnTHbHJFl2",
      "name" : "The Beatles",
      "type" : "artist",
      "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
    } ],
    "available_markets" : [ "CA", "MX", "US" ],
    "disc_number" : 1,
    "duration_ms" : 125666,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "GBAYE0601477"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/3BQHpFgAp4l80e1XslIjNI"
    },
    "href" : "https://api.spotify.com/v1/tracks/3BQHpFgAp4l80e1XslIjNI",
    "id" : "3BQHpFgAp4l80e1XslIjNI",
    "name" : "Yesterday - Remastered",
    "popularity" : 65,
    "preview_url" : "https://p.scdn.co/mp3-preview/e0e725ffb5467d8fc192f5f2bdc0656de2d5d8b3?cid=null",
    "track_number" : 13,
    "type" : "track",
    "uri" : "spotify:track:3BQHpFgAp4l80e1XslIjNI"
  }, {
    "album" : {
      "album_type" : "album",
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
        },
        "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
        "id" : "3WrFJ7ztbogyGnTHbHJFl2",
        "name" : "The Beatles",
        "type" : "artist",
        "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/7vEJAtP3KgKSpOHVgwm3Eh"
      },
      "href" : "https://api.spotify.com/v1/albums/7vEJAtP3KgKSpOHVgwm3Eh",
      "id" : "7vEJAtP3KgKSpOHVgwm3Eh",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/9ecfdf528562cae879748b73bd81b64dfa3d5704",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/58d9e881327df093da91b082ed89a4e2c4fec1a9",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/adda7302aab91f1a83cdca24878bad49384dae65",
        "width" : 64
      } ],
      "name" : "1 (Remastered)",
      "type" : "album",
      "uri" : "spotify:album:7vEJAtP3KgKSpOHVgwm3Eh"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
      },
      "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
      "id" : "3WrFJ7ztbogyGnTHbHJFl2",
      "name" : "The Beatles",
      "type" : "artist",
      "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
    } ],
    "available_markets" : [ "CA", "MX", "US" ],
    "disc_number" : 1,
    "duration_ms" : 145746,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "GBUM71505904"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/4pbG9SUmWIvsROVLF0zF9s"
    },
    "href" : "https://api.spotify.com/v1/tracks/4pbG9SUmWIvsROVLF0zF9s",
    "id" : "4pbG9SUmWIvsROVLF0zF9s",
    "name" : "I Want To Hold Your Hand - Remastered 2015",
    "popularity" : 67,
    "preview_url" : "https://p.scdn.co/mp3-preview/d7e6b26957825e64b3546bd7365b74baa1ce3046?cid=null",
    "track_number" : 4,
    "type" : "track",
    "uri" : "spotify:track:4pbG9SUmWIvsROVLF0zF9s"
  }, {
    "album" : {
      "album_type" : "album",
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
        },
        "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
        "id" : "3WrFJ7ztbogyGnTHbHJFl2",
        "name" : "The Beatles",
        "type" : "artist",
        "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/1klALx0u4AavZNEvC4LrTL"
      },
      "href" : "https://api.spotify.com/v1/albums/1klALx0u4AavZNEvC4LrTL",
      "id" : "1klALx0u4AavZNEvC4LrTL",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/2782d94528b449fb6910300cc8c8f93ab8cc7a8d",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/b6fe2afbd9fc1719d08765e693c9d91e5cafb38e",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/395d7bdb8713327f6ddce44740caee2b4739ff5f",
        "width" : 64
      } ],
      "name" : "The Beatles (Remastered)",
      "type" : "album",
      "uri" : "spotify:album:1klALx0u4AavZNEvC4LrTL"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
      },
      "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
      "id" : "3WrFJ7ztbogyGnTHbHJFl2",
      "name" : "The Beatles",
      "type" : "artist",
      "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
    } ],
    "available_markets" : [ "CA", "MX", "US" ],
    "disc_number" : 1,
    "duration_ms" : 285000,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "GBAYE0601650"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/389QX9Q1eUOEZ19vtzzI9O"
    },
    "href" : "https://api.spotify.com/v1/tracks/389QX9Q1eUOEZ19vtzzI9O",
    "id" : "389QX9Q1eUOEZ19vtzzI9O",
    "name" : "While My Guitar Gently Weeps - Remastered",
    "popularity" : 65,
    "preview_url" : "https://p.scdn.co/mp3-preview/7fff749e1f714fc9bd2cf74802a04ebf1ec6a249?cid=null",
    "track_number" : 7,
    "type" : "track",
    "uri" : "spotify:track:389QX9Q1eUOEZ19vtzzI9O"
  }, {
    "album" : {
      "album_type" : "album",
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
        },
        "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
        "id" : "3WrFJ7ztbogyGnTHbHJFl2",
        "name" : "The Beatles",
        "type" : "artist",
        "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/50o7kf2wLwVmOTVYJOTplm"
      },
      "href" : "https://api.spotify.com/v1/albums/50o7kf2wLwVmOTVYJOTplm",
      "id" : "50o7kf2wLwVmOTVYJOTplm",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/e26910fd9e7bb1671213cb9ed06a855077ddd79f",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/7da8f3c2b2e002853864b6986f78e8cb7933d020",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/fc4fe9ac0aa200c5af2bf26d791fad09dbc059e2",
        "width" : 64
      } ],
      "name" : "Rubber Soul (Remastered)",
      "type" : "album",
      "uri" : "spotify:album:50o7kf2wLwVmOTVYJOTplm"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
      },
      "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
      "id" : "3WrFJ7ztbogyGnTHbHJFl2",
      "name" : "The Beatles",
      "type" : "artist",
      "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
    } ],
    "available_markets" : [ "CA", "MX", "US" ],
    "disc_number" : 1,
    "duration_ms" : 146333,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "GBAYE0601489"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/3KfbEIOC7YIv90FIfNSZpo"
    },
    "href" : "https://api.spotify.com/v1/tracks/3KfbEIOC7YIv90FIfNSZpo",
    "id" : "3KfbEIOC7YIv90FIfNSZpo",
    "name" : "In My Life - Remastered",
    "popularity" : 64,
    "preview_url" : "https://p.scdn.co/mp3-preview/729eb2814049fdf4e8b62b614e459be1a55b5040?cid=null",
    "track_number" : 11,
    "type" : "track",
    "uri" : "spotify:track:3KfbEIOC7YIv90FIfNSZpo"
  } ]
}
```

Please consult the Spotify Web API Docs for the [Artist Top Tracks](https://developer.spotify.com/web-api/get-artists-top-tracks/) endpoint for more details.

