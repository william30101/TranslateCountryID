var countries = require("i18n-iso-countries");

const readline = require('readline');
    const fs = require('fs');
 
    const rl = readline.createInterface({
      input: fs.createReadStream('countrylist.txt')
    });
 
    rl.on('line', function (line) {
      console.log('Line from file:', line);
      console.log(line + ' => ' + countries.getAlpha2Code(line, 'en'));

		fs.appendFile("translatedCountry.txt", countries.getAlpha2Code(line, 'en') + '\n', function(err) {
		    if(err) {
		        return console.log(err);
		    }

		    console.log("The file was saved!");
		});
     });
