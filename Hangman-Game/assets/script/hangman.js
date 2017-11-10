var words = ['prince', 'journey', 'blondie', 'inxs', 'heart', 'rush', 'sting', 'wham!'];

var randomNumber = Math.floor (Math.random() * words.length);

var chosenWord = words[randomNumber];

var underScore = [];

var wrongGuess = [];

var correctGuess = [];

var pageWrongGuess = document.getElementsByClassName('wrongGuess');

var pageUnderScore = document.getElementsByClassName('underscore');

console.log(chosenWord);



let createUnderScore = () => {
	for(var i = 0; i < chosenWord.length; i++) {
		underScore.push('_');
	}
	return underScore;
}

document.getElementsByClassName('underscore')[0].innerHTML= createUnderScore ().join(' ');



document.addEventListener('keypress', (event) => {

	let keyWord = String.fromCharCode(event.keyCode).toLowerCase();

		if (chosenWord.indexOf(keyWord) !== -1) {
				

			for (i = 0; i < chosenWord.length; i++ ) {



			


				console.log(keyWord);
				// console.log(chosenWord[j]);



				if (keyWord === chosenWord.charAt(i)) {


				console.log(keyWord);
	

					// document.getElementsByClassName('underscore')[0].innerHTML += (' ');
				


					underScore[chosenWord.indexOf(keyWord)] = keyWord;

					pageUnderScore[0].innerHTML = underScore.join (' ');

								if(underScore.join('') === chosenWord){
									alert('Radical!');
								}



					// console.log('yes');
				}
			}
		}
	else {
	wrongGuess.push(keyWord);
	pageWrongGuess[0].innerHTML = wrongGuess.join (' ');
	}
	

});


