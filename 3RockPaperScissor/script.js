let score = {
    computer: 0,
    user: 0,
    Tied: 0,
    updateResult: function(userChoice, computerChoice, result) {
      document.querySelector('#result').innerHTML = ` ${result}`;
      this.saveScore();
    },
    saveScore: function() {
      let scoreStr = JSON.stringify(this);
      localStorage.setItem('score', scoreStr);
      console.log(`score saved: ${scoreStr}`);
    }
  };
  
  function compChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
      return '✊';
    } else if (randomChoice === 1) {
      return '📃';
    } else {
      return '✂';
    }
  }
  
  function initialize() {
    let scoreStr = localStorage.getItem('score');
    if (scoreStr) {
      let scoreVal = JSON.parse(scoreStr);
      score.computer = scoreVal.computer;
      score.user = scoreVal.user;
      score.Tied = scoreVal.Tied;
    }
  }
  
  function ifRock() {
    document.querySelector('#user-choice').innerHTML = 'YOU HAVE SELECTED ✊';
    let computerChoice = compChoice();
    document.querySelector('#comp-choice').innerHTML = `COMPUTER HAS SELECTED ${computerChoice} `;
    let result;
    if (computerChoice === '✊') {
      result = `It's a tie 🤝...`;
      score.Tied++;
    } else if (computerChoice === '📃') {
      result = `Computer won this time 😟...`;
      score.computer++;
    } else {
      result = `Congrats You won 🤩...`;
      score.user++;
    }
    score.updateResult('✊', computerChoice, result);
    document.querySelector('#score').innerHTML = `Computer Won: ${score.computer} User Won: ${score.user} Match Tied: ${score.Tied}`;
  }
  
  function ifPaper() {
    document.querySelector('#user-choice').innerHTML = 'YOU HAVE SELECTED 📃';
    let computerChoice = compChoice();
    document.querySelector('#comp-choice').innerHTML = `COMPUTER HAS SELECTED ${computerChoice} `;
    let result;
    if (computerChoice === '📃') {
      result = `It's a tie 🤝...`;
      score.Tied++;
    } else if (computerChoice === '✂') {
      result = `Computer won this time 😟...`;
      score.computer++;
    } else {
      result = `Congrats You won 🤩...`;
      score.user++;
    }
    score.updateResult('📃', computerChoice, result);
    document.querySelector('#score').innerHTML = `Computer Won: ${score.computer} User Won: ${score.user} Match Tied: ${score.Tied}`;
  }
  
  function ifScissor() {
    document.querySelector('#user-choice').innerHTML = 'YOU HAVE SELECTED ✂';
    let computerChoice = compChoice();
    document.querySelector('#comp-choice').innerHTML = `COMPUTER HAS SELECTED ${computerChoice} `;
    let result;
    if (computerChoice === '✂') {
      result = `It's a tie 🤝...`;
      score.Tied++;
    } else if (computerChoice === '✊') {
      result = `Computer won this time 😟...`;
      score.computer++;
    } else {
      result = `Congrats You won 🤩...`;
      score.user++;
    }
    score.updateResult('✂', computerChoice, result);
    document.querySelector('#score').innerHTML = `Computer Won: ${score.computer} User Won: ${score.user} Match Tied: ${score.Tied}`;
  }
  function resetScore(){
    localStorage.clear();
    score.computer = 0;
    score.user = 0;
    score.Tied = 0;
    document.querySelector('#score').innerHTML = `Computer Won: ${score.computer} User Won: ${score.user} Match Tied: ${score.Tied}`;
  
  }
  
  initialize();
  
  
  