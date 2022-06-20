const team = {
    _players: [ {firstName: 'bob', lastName: 'star', age: 32},
                {firstName: 'sam', lastName: 'rob', age: 21},
                {firstName: 'john', lastName: 'ball', age: 29}
              ],
    _games: [
      {opponent: 'bluesocks', teamPoints: 12,opponentPoints: 132},
      {opponent: 'greensocks', teamPoints: 2, oppenentPoints: 75},
      {opponent: 'orangesocks', teamPoints: 1, oppenentPoints: 93}
            ],
            get players(){
              return this._players;
            },
            get games(){
              return this._games;
            },
            addPlayer(newFirstName, newLastName, newAge){
              let player ={
              firstName: newFirstName,
              lastName: newLastName,
              age: newAge
            }
            this.players.push(player);
        },
        addGame(newOpponent, newTeamPoints, newOpponentPoints){
          let game ={
          opponent: newOpponent,
          teamPoints: newTeamPoints,
          opponentPoints: newOpponentPoints
          }
        this.games.push(game)
        }
  }
  team.addPlayer('Bugs','Bunny',76);
  team.addGame('Purplesocks', 100, 0);
  console.log(team.players);
  console.log(team.games);