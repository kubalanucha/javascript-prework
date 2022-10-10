function printMessage(msg) {
  let div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

function clearMessages() {
  document.getElementById('messages').innerHTML = '';
}
function playGame(playerInput) {
  clearMessages();
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  let computerMove = getMoveName(randomNumber);

  /*if (randomNumber == 1) {
  computerMove = 'kamień';
} else if (randomNumber == 2) {
  computerMove = 'papier';
} else if (randomNumber == 3) {
  computerMove = 'nożyce';
}*/

  printMessage('Mój ruch to: ' + computerMove);

  /*let playerInput = prompt(
    'Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'
  );*/

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  /*if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == 2) {
  playerMove = 'papier';
} else if (playerInput == 3) {
  playerMove = 'nożyce';
}*/

  printMessage('Twój ruch to: ' + playerMove);

  function displayResult(argComputerMove, argPlayerMove) {
    console.log(
      'Komputer wybrał:',
      argComputerMove,
      'Gracz wybrał:',
      argPlayerMove
    );
    if (
      (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
      (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ) {
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == argPlayerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Przegrywasz!');
    }
  }

  displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function () {
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3);
});
/*playGame(3);*/
/*if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
  } else if (computerMove == 'kamień' && playerMove == 'nożyce') {
    printMessage('Ty przegrywasz!');
  } else if (computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
  } else if (computerMove == 'nożyce' && playerMove == 'papier') {
    printMessage('Ty przegrywasz!');
  } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
  } else if (computerMove == 'papier' && playerMove == 'kamień') {
    printMessage('Ty przegrywasz!');
  } else if (computerMove == 'papier' && playerMove == 'papier') {
    printMessage('remis!');
  } else if (computerMove == 'kamień' && playerMove == 'kamień') {
    printMessage('remis!');
  } else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
    printMessage('remis!');
  } else {
    printMessage('nieznany ruch');
  }
}*/
