class Game 
{
  constructor(){}

  getState()
  {
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data)
                            {
                              gameState = data.val();
                            }
                    );

  }

  update(state)
  {
    database.ref('/').update({  gameState : state  });
  }

    async start()
  {
    if(gameState === 0)
    {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      

      if(playerCountRef.exists())
      {
        playerCount = playerCountRef.val();
       
        player.getCount();
      }

      form = new Form();
      form.display();
    }
  }

  play()
  {
    form.hide();

    textSize(30);
    text("  Game Start", 120, 100)
    
      Player.getPlayerInfo();
      console.log("hi outside if")

    if(allPlayers !== undefined)
    {
      var y_position = 130;
     console.log("hi inside if")
     console.log(allPlayers)
      for(var plr in allPlayers)
      {
        console.log("hi inside forloop")
        console.log(plr)
        if (plr === "player"+player.index)
          fill("red");
        else
          fill("black");

        y_position+= 20;
       console.log(allPlayers[plr].name)
        textSize(15);
        text( allPlayers[plr].name+": " +  allPlayers[plr].distance , 120,y_position)
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null)
    {
      player.distance += 50;
      player.update();
    }
  }
}