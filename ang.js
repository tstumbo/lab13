//
var app = angular.module('chattyApp', []);
//need two arrays. One for words, One for phrases
app.controller('talk', function($scope) {
  // words
  $scope.wordArr = ["Dog", "House", "Candy", "Teddy Bear"];
  // phrases arrays
  $scope.phraseArr = ["I didn't do it!", "Daddy, I'm hungry!", "Are we there yet?"];
  // filter arrays
  $scope.filterArr = [uppercase];
  //words function
  $scope.madness = [];
  $scope.word = function() {
    console.log("hello");
    //get a random word from wordArr
    var index = Math.floor(Math.random() * ($scope.wordArr.length));
    var randWord = $scope.wordArr[index];
    console.log(index);
    var newWord = {
      string: randWord,
    }
    $scope.madness.push(newWord);
  }
    //Get random word from array
    //append random word into <p>
  //wordDec function
  $scope.wordDec = function() {
    console.log("hello");
    //get a random word from wordArr
    var wordIndex = Math.floor(Math.random() * ($scope.wordArr.length));
    var randWord = $scope.wordArr[wordIndex];
    var filterIndex = Math.floor(Math.random() * ($scope.filterArr.length));
    var randFilter = $scope.filterArr[filterIndex];
    // console.log(index);
    var newWord = {
      string: randWord,
      filter: randFilter
    };
    console.log(newWord);
    $scope.madness.push(newWord);
  }
    //Get random word from array
    //Apply random decoration to word
    //append random word into <p>

  //phrase function
    //get random phrase from array
    //append random phrase into <p>
  //phraseDec function
    //Get random phrase from array
    //Apply random decoration to phrase
    //append random phrase into <p>
});
