const request = require('request')
const fs = require('fs')

process.stdout.write('Enter a search query: ')

function getAJoke(joke) {
    joke = joke.toString().trim()

    if (joke === 'EXIT') {
        process.stdout.write('Ok. Bye!\n')
        process.exit()
    }

    const options = {
        url: `https://icanhazdadjoke.com/search?term=${joke}&limit=1`,
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    };

    request(options, function (err, res, body) {
        let json = JSON.parse(body);
        let result

        if (json.results[0] === undefined) {
            console.log('No jokes found for that search query\n')
            process.stdout.write('Enter another search query or enter "EXIT" to quit: ')
            return
        }

        result = json.results[0].joke
        writeToFile(result)
        console.log(`Random Joke: ${result}\n`)
        process.stdout.write('Enter another search query or enter "EXIT" to quit: ')
    });
}

function writeToFile(joke) {
    fs.appendFile('jokes.txt', `${joke}\n`, error => {
        if (error) throw error
    })
}

process.stdin.on('data', getAJoke)