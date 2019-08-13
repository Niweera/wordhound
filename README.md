[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HitCount](http://hits.dwyl.io/Niweera/wordhound.svg)](http://hits.dwyl.io/Niweera/wordhound)
[![Known Vulnerabilities](https://snyk.io//test/github/Niweera/wordhound/badge.svg?targetFile=package.json)](https://snyk.io//test/github/Niweera/wordhound?targetFile=package.json)
![GitHub issues](https://img.shields.io/github/issues/Niweera/wordhound)
![Website](https://img.shields.io/website/https/wordhound.niweera.gq?down_color=lightgrey&down_message=offline&up_color=blue&up_message=online)

# WordHound
> WordHound service is a supporting service for WordHunter project which provides custom dictionary caching with database support. More details on WordHunter project as follows.

## Getting Started

To view the meaning of a specific word, enter the word at the provided endpoint. The WordCache DB is the store for all the words and definitions. WordHound learns new words everytime it is being used.

Eg. `https://wordhound.niweera.gq/words/hello`, will give you the dictionary definition of **hello** directly from the WordCache DB:

```json
{
  "word": "hello",
  "definition": "used as a greeting or to begin a telephone conversation."
}
```

Eg. `https://wordhound.niweera.gq/words/find/hello`, will give you the dictionary definition of **hello** even if the word is not present in the WordCache DB:

```json
{
  "word": "hello",
  "definition": "used as a greeting or to begin a telephone conversation."
}
```

### Paths

| Location | Endpoint |
| :-- | :-- |
| Root path | `https://wordhound.niweera.gq/`|


### HTTP request and query methods

| Method | Endpoint | Query | Description | Examples |
| :-- | :-- | :-- | :-- | :-- |
| `GET` | `/words` | `{word}` | Give JSON response with the definitions of the `{word}` directly from the WordCache DB. | [`hello`](https://wordhound.niweera.gq/words/hello) |
| `GET` | `/words/find` | `{word}` | Use this endpoint if the previous endpoint does not provide any definition. When using this endpoint to get the definition, the WordCache DB learns new words. | [`hello`](https://wordhound.niweera.gq/words/find/hello) |

## Related Projects

### WordHunter
> WordHunter lets you to find the words for the letters you have when you are playing Scrabble.

The following is the basic architecture of the WordHunter application. (The web application will use the WordHunter-api to get the results according to the letters that the user has given.)




![](https://raw.githubusercontent.com/Niweera/wordhunter-api/master/w.png)

### Example use case

User wants to find words which can be created from `a, o, n, t`

The WordHunter service will provide the following results.
1. nato - North Atlantic Treaty Organization.

(The initial version would only give the words which contains all the letters. Later versions would provide all the letter combinations.)

## Meta

Nipuna Weerasekara – [@Niweera](https://twitter.com/Niweera) – w.nipuna@gmail.com

Distributed under the MIT license. See ``LICENSE`` for more information.

The front-end for WordHunter application is in [https://github.com/Niweera/wordhunter](https://github.com/Niweera/wordhunter)

The back-end for this application is in [wordhunter-api](https://github.com/Niweera/wordhunter-api) repo.

[https://github.com/Niweera/wordhound](https://github.com/Niweera/wordhound)

This repo is a part of `WordHunter` project.

`WordHunter` uses [GoogleDict](https://dict.niweera.gq) Dictionary API service. Find its repo [here](https://github.com/Niweera/googledict).

## Contributing

1. Fork it (<https://github.com/Niweera/wordhound/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
