function startGame() {
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Game started yay';
}

document.getElementById('startGame').addEventListener('click', startGame);