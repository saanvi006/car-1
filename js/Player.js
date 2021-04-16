class Player {
  constructor(){
    this.index = null
    this.distance = 0
    this.name = null
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
  var Index = "players/ player" + this.index;
    database.ref(Index).set({
      name:this.name,distance:this.distance})
      
  }
  static getPlayerinfo(){
    var playeref = database.ref("players")
playeref.on("value", (data)=>{allPlayers = data.val()})

    
  }

}
