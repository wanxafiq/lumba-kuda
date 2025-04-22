document.getElementById('startGame').addEventListener('click', () => {
  const players = parseInt(document.getElementById('playerCount').value);
  const decks = parseInt(document.getElementById('deckCount').value);
  const track = parseInt(document.getElementById('trackLength').value);

  console.log('Players:', players);
  console.log('Decks:', decks);
  console.log('Track Length:', track);

  // TODO: Initialize player chips, deck, track, and game logic

  document.getElementById('setup-screen').style.display = 'none';
  document.getElementById('game-screen').style.display = 'block';
});
