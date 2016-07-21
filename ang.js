//
var app = angular.module('chattyApp', []);
//need two arrays. One for words, One for phrases
app.controller('talk', function($scope) {
  // words
  $scope.wordArr = ["Doggie!", "Candy", "Whyyyy?", "Gimmee", "AAAAAHH", "NOW!!", "RAAAAAURRR!"];
  // phrases arrays
  $scope.phraseArr = ["I didn't do it!", "Daddy, I'm hungry!", "Are we there yet?", "But Mommy lets me.", "I'm so AAANGRY!", "I want it now!!", "Time for home"];

  // class arrays

  $scope.classArr = ["bigger", "pink", "upperCase"];
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
    console.log(newWord)
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

    var classIndex = Math.floor(Math.random() * ($scope.classArr.length));
    var randClass = $scope.classArr[classIndex];
    // console.log(index);
    var newWord = {
      string: randWord,
      class: randClass

    };
    console.log(newWord);
    $scope.madness.push(newWord);
  }
    //Get random word from array
    //Apply random decoration to word
    //append random word into <p>

  //phrase function
  $scope.phrase = function() {
    console.log("hello");
    //get a random phrase from phraseArr
    var index = Math.floor(Math.random() * ($scope.phraseArr.length));
    var randPhrase = $scope.phraseArr[index];
    console.log(index);
    var newPhrase = {
      string: randPhrase,
    }
    console.log(newPhrase)
    $scope.madness.push(newPhrase);
  }
    //get random phrase from array
    //append random phrase into <p>
  //phraseDec function
  $scope.phraseDec = function() {
    console.log("hello");
    //get a random phrase from phraseArr
    var phraseIndex = Math.floor(Math.random() * ($scope.phraseArr.length));
    var randPhrase = $scope.phraseArr[phraseIndex];

    var classIndex = Math.floor(Math.random() * ($scope.classArr.length));
    var randClass = $scope.classArr[classIndex];
    // console.log(index);
    var newPhrase = {
      string: randPhrase,
      class: randClass

    };
    console.log(newPhrase);
    $scope.madness.push(newPhrase);
  }
    //Get random phrase from array
    //Apply random decoration to phrase
    //append random phrase into <p>

    function randBtn() {
      var funcArr = [$scope.word, $scope.wordDec, $scope.phrase, $scope.phraseDec];
      $scope.$apply(funcArr[Math.floor(Math.random() * (funcArr.length))]());
      console.log($scope.madness);
    }
    setInterval(randBtn, 1000);


});

app.directive('randWord', function() {
  return {
    restrict: 'A',
    template: '<span class="{{ word.class }}">{{word.string}} {{word.class}}</span>'
  }



});
