function printMessage(msg) {
  const div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}
{
  function clearMessages() {
    document.getElementById('messages').innerHTML = '';
  }
  const playGame = function (playerInput) {
    clearMessages();
    const randomNumber = Math.floor(Math.random() * 3 + 1);

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

    const computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    const playerMove = getMoveName(playerInput);

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
  };

  document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
  });
  document
    .getElementById('play-scissors')
    .addEventListener('click', function () {
      playGame(3);
    });
}
